const fs = require("fs");
const path = require("path");

try {
  // 1. Read the dumped SVG content
  const svgContent = fs.readFileSync("logo_debug.txt", "utf8");

  // 2. Extract the text path (starts with M65)
  // We look for d="M65... until the closing quote
  const match = svgContent.match(/d="(M65[^"]+)"/);
  if (!match) {
    console.error(
      "Could not find text path starting with M65 in logo_debug.txt",
    );
    process.exit(1);
  }
  const fullTextPath = match[1];
  console.log("Found Text Path length:", fullTextPath.length);

  // 3. Read Logo.tsx
  const logoPath = path.join("src", "components", "Logo.tsx");
  let logoContent = fs.readFileSync(logoPath, "utf8");

  // 4. Replace the old textPath string
  // Regex matches: const textPath = "..."
  // We use a safe replacement
  const newContent = logoContent.replace(
    /const textPath = ".*";/,
    `const textPath = "${fullTextPath}";`,
  );

  if (newContent === logoContent) {
    console.error(
      'Replacement failed - regex did not match const textPath = "..."',
    );
    // Fallback: maybe it has newlines? try simpler substring replacement if needed
  } else {
    fs.writeFileSync(logoPath, newContent);
    console.log("Successfully updated Logo.tsx with full text path");
  }
} catch (e) {
  console.error(e);
}
