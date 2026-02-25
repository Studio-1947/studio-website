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

  const sizes = paths.map((d, i) => ({ index: i, size: getApproxSize(d) }));

  sizes.sort((a, b) => a.size - b.size);

  console.log("--- Sizes Distribution ---");
  console.log("Small (<25):", sizes.filter((s) => s.size < 25).length);
  console.log(
    "Medium (25-60):",
    sizes.filter((s) => s.size >= 25 && s.size < 60).length,
  );
  console.log("Large (>60):", sizes.filter((s) => s.size >= 60).length);

  const medium = sizes.filter((s) => s.size >= 25 && s.size < 60);
  console.log(
    "Medium items indices:",
    medium.map((m) => m.index),
  );

  const large = sizes.filter((s) => s.size >= 60);
  console.log(
    "Large items indices:",
    large.map((l) => l.index),
  );
} catch (err) {
  console.error("Error:", err);
}
