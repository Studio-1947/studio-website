const fs = require("fs");

const SVG_PATH = "dist/Hero_right_figure.svg";
const OUTPUT_PATH = "src/components/HeroFigure.tsx";

try {
  let svgContent = fs.readFileSync(SVG_PATH, "utf8");

  // Extract paths
  const paths = [];
  const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    paths.push(match[0]);
  }

  // Extract circle
  const circleMatch = svgContent.match(/<circle[^>]*>/);
  const circleTag = circleMatch ? circleMatch[0] : "";

  // Grouping Logic
  const centerPaths = [];
  const middleRingDashes = [];
  const middleRingStatic = []; // Planets
  const outerRingDashes = [];
  const outerRingStatic = []; // Planets

  function getRoughDistance(d) {
    const numbers = d
      .replace(/[A-Za-z]/g, " ")
      .trim()
      .split(/[\s,]+/)
      .map(Number);
    if (numbers.length >= 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
      const x = numbers[0];
      const y = numbers[1];
      const dx = x - 350;
      const dy = y - 350;
      return Math.sqrt(dx * dx + dy * dy);
    }
    return 0;
  }

  function getApproxSize(d) {
    const numbers = d
      .replace(/[A-Za-z]/g, " ")
      .trim()
      .split(/[\s,]+/)
      .map(Number);
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    for (let i = 0; i < numbers.length; i += 2) {
      const x = numbers[i];
      const y = numbers[i + 1];
      if (!isNaN(x)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
      if (!isNaN(y)) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
    return Math.sqrt(Math.pow(maxX - minX, 2) + Math.pow(maxY - minY, 2));
  }

  paths.forEach((tag) => {
    const dMatch = tag.match(/d="([^"]*)"/);
    if (dMatch) {
      const d = dMatch[1];
      const dist = getRoughDistance(d);
      const size = getApproxSize(d);

      // Fix xmlns attribute if present
      let cleanTag = tag.replace(/xmlns="[^"]*"/, "");
      if (!cleanTag.endsWith("/>")) {
        cleanTag = cleanTag.replace(">", " />");
      }

      if (dist < 230) {
        centerPaths.push(cleanTag);
      } else if (dist < 290) {
        if (size < 50) {
          // Threshold for dashes vs planets
          middleRingDashes.push(cleanTag);
        } else {
          middleRingStatic.push(cleanTag);
        }
      } else {
        if (size < 50) {
          outerRingDashes.push(cleanTag);
        } else {
          outerRingStatic.push(cleanTag);
        }
      }
    }
  });

  // Clean circle tag
  let cleanCircle = circleTag.replace(/xmlns="[^"]*"/, "");
  if (cleanCircle && !cleanCircle.endsWith("/>"))
    cleanCircle = cleanCircle.replace(">", " />");

  const componentContent = `
import { motion } from "framer-motion";

export default function HeroFigure({ className }: { className?: string }) {
    return (
        <svg
            width="700"
            height="676"
            viewBox="0 0 700 676"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Center Static Elements */}
            <g>
                ${centerPaths.join("\n                ")}
            </g>

            {/* Static Planets (Middle Ring) */}
            <g>
                ${middleRingStatic.join("\n                ")}
            </g>
            
            {/* Static Planets (Outer Ring) */}
            <g>
                ${outerRingStatic.join("\n                ")}
            </g>

            {/* Middle Ring Dashes - Rotating Clockwise */}
            <motion.g
                style={{ originX: "350px", originY: "350px", transformBox: "view-box" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                ${middleRingDashes.join("\n                ")}
            </motion.g>

            {/* Dotted Circle - Rotating Clockwise (Slower) */}
            <motion.g
                 style={{ originX: "350px", originY: "350px", transformBox: "view-box" }}
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                ${cleanCircle}
            </motion.g>

            {/* Outer Ring Dashes - Rotating Counter-Clockwise */}
            <motion.g
                style={{ originX: "350px", originY: "350px", transformBox: "view-box" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                ${outerRingDashes.join("\n                ")}
            </motion.g>
        </svg>
    );
}
`;

  fs.writeFileSync(OUTPUT_PATH, componentContent);
  console.log(`Generated component with:`);
  console.log(`- Center: ${centerPaths.length}`);
  console.log(
    `- Middle: ${middleRingStatic.length} static, ${middleRingDashes.length} rotating`,
  );
  console.log(
    `- Outer: ${outerRingStatic.length} static, ${outerRingDashes.length} rotating`,
  );
} catch (err) {
  console.error("Error generating component:", err);
}
