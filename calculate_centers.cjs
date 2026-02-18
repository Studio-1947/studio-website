const fs = require("fs");

const SVG_PATH = "dist/Hero_right_figure.svg";

try {
  let svgContent = fs.readFileSync(SVG_PATH, "utf8");

  // Extract paths
  const paths = [];
  const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    paths.push(match[1]); // Just the d attribute
  }

  // Helper to get rough position of a path (first point)
  function getStartPoint(d) {
    const numbers = d
      .replace(/[A-Za-z]/g, " ")
      .trim()
      .split(/[\s,]+/)
      .map(Number);
    if (numbers.length >= 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
      return { x: numbers[0], y: numbers[1] };
    }
    return null;
  }

  // Rough distance validation
  function getDistFrom350(p) {
    if (!p) return 0;
    const dx = p.x - 350;
    const dy = p.y - 350;
    return Math.sqrt(dx * dx + dy * dy);
  }

  const groups = {
    center: [],
    middlePathPoints: [],
    outerPathPoints: [],
  };

  paths.forEach((d) => {
    const p = getStartPoint(d);
    if (p) {
      const dist = getDistFrom350(p);
      if (dist < 230) {
        // center
      } else if (dist < 290) {
        groups.middlePathPoints.push(p);
      } else {
        groups.outerPathPoints.push(p);
      }
    }
  });

  function getAverageCenter(points) {
    if (points.length === 0) return { x: 350, y: 350 };
    let sumX = 0;
    let sumY = 0;
    points.forEach((p) => {
      sumX += p.x;
      sumY += p.y;
    });
    return { x: sumX / points.length, y: sumY / points.length };
  }

  const middleCenter = getAverageCenter(groups.middlePathPoints);
  const outerCenter = getAverageCenter(groups.outerPathPoints);

  console.log("Middle Ring Center:", middleCenter);
  console.log("Outer Ring Center:", outerCenter);
  console.log("SVG Center: { x: 350, y: 350 } (Assumed from viewbox/circle)");

  // Also check bounds to be sure
  function getBounds(points) {
    if (points.length === 0) return null;
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    points.forEach((p) => {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    });
    return {
      minX,
      maxX,
      minY,
      maxY,
      centerX: (minX + maxX) / 2,
      centerY: (minY + maxY) / 2,
    };
  }

  console.log("Middle Ring Bounds:", getBounds(groups.middlePathPoints));
  console.log("Outer Ring Bounds:", getBounds(groups.outerPathPoints));
} catch (err) {
  console.error("Error:", err);
}
