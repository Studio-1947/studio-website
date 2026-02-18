const fs = require("fs");
const path = require("path");

try {
  const filePath = path.resolve("public/logo.svg");
  console.log("Reading file:", filePath);
  if (!fs.existsSync(filePath)) {
    console.error("File not found!");
    process.exit(1);
  }
  const svg = fs.readFileSync(filePath, "utf8");

  // Split by d=" to find paths
  const parts = svg.split('d="');
  let output = "";

  parts.forEach((part, index) => {
    if (index === 0) return; // Skip header
    const endQuote = part.indexOf('"');
    if (endQuote > -1) {
      const pathData = part.substring(0, endQuote);
      output += `\n--- PATH ${index} START ---\n`;
      // Split long path data into chunks of 80 chars for safe reading
      for (let i = 0; i < pathData.length; i += 80) {
        output += pathData.slice(i, i + 80) + "\n";
      }
      output += `--- PATH ${index} END ---\n`;
    }
  });

  fs.writeFileSync("debug_paths.txt", output);
  console.log("Successfully wrote debug_paths.txt");
} catch (e) {
  console.error("Error:", e);
  process.exit(1);
}
