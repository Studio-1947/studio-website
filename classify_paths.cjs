const fs = require("fs");

const SVG_PATH = "dist/Hero_right_figure.svg";

try {
  let svgContent = fs.readFileSync(SVG_PATH, "utf8");
  const paths = [];
  const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    paths.push(match[1]);
  }

  // Helper to get bounding box of d
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
    return {
      w: maxX - minX,
      h: maxY - minY,
      diag: Math.sqrt(Math.pow(maxX - minX, 2) + Math.pow(maxY - minY, 2)),
    };
  }

  const sizes = paths.map((p) => getApproxSize(p));

  // Sort by diagonal size
  sizes.sort((a, b) => a.diag - b.diag);

  console.log("Smallest 5:", sizes.slice(0, 5));
  console.log("Largest 5:", sizes.slice(-5));

  // Check distribution
  const small = sizes.filter((s) => s.diag < 20).length;
  const medium = sizes.filter((s) => s.diag >= 20 && s.diag < 50).length;
  const large = sizes.filter((s) => s.diag >= 50).length;

  console.log(`Small (<20): ${small}`);
  console.log(`Medium (20-50): ${medium}`);
  console.log(`Large (>50): ${large}`);
} catch (err) {
  console.error("Error:", err);
}
