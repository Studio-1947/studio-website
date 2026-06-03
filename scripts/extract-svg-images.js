import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SVG_PATH = path.resolve('public/what_we_do.svg');
const OUTPUT_DIR = path.resolve('public');

async function main() {
  console.log(`Reading SVG file: ${SVG_PATH}`);
  let svgContent = fs.readFileSync(SVG_PATH, 'utf8');
  console.log(`Original SVG size: ${(svgContent.length / (1024 * 1024)).toFixed(2)} MB`);

  // Regular expression to match <image> tags with base64 data
  // <image ... xlink:href="data:image/png;base64,..." or href="data:image/png;base64,..."
  const imageRegex = /<image([^>]*?)(href|xlink:href)="data:image\/(png|jpeg|jpg);base64,([^"]+)"([^>]*?)>/g;

  let match;
  let count = 0;

  // We loop over all matches
  while ((match = imageRegex.exec(svgContent)) !== null) {
    count++;
    const [fullTag, beforeHref, attributeName, format, base64Data, afterHref] = match;
    console.log(`\nFound embedded image #${count} (format: ${format})`);

    const buffer = Buffer.from(base64Data, 'base64');
    const tempFileName = `what_we_do_extracted_${count}.${format}`;
    const tempFilePath = path.join(OUTPUT_DIR, tempFileName);

    fs.writeFileSync(tempFilePath, buffer);
    console.log(`Extracted raw image size: ${(buffer.length / 1024).toFixed(1)} KB`);

    // Let's compress it using sharp to a high-quality WebP or JPEG
    // WebP is ideal, but let's compress to JPEG (progressive) as it is universally compatible and matches standard layouts.
    // Or WebP since it is supported by 97%+ browsers in 2026. Let's use WebP!
    const compressedFileName = `what_we_do_bg_${count}.webp`;
    const compressedFilePath = path.join(OUTPUT_DIR, compressedFileName);

    console.log(`Compressing extracted image to WebP: ${compressedFileName}`);
    await sharp(tempFilePath)
      .webp({ quality: 80 })
      .toFile(compressedFilePath);

    const compressedStats = fs.statSync(compressedFilePath);
    console.log(`Compressed WebP size: ${(compressedStats.size / 1024).toFixed(1)} KB`);

    // Delete the temporary file
    fs.unlinkSync(tempFilePath);

    // Replace the base64 URL inside the SVG with the external reference
    // We replace the entire xlink:href="data:..." or href="data:..." with href="/compressedFileName"
    // Note: in modern SVG, simple 'href' is preferred over 'xlink:href'
    const newTag = `<image${beforeHref}href="/${compressedFileName}"${afterHref}>`;

    // Replace in SVG content
    svgContent = svgContent.replace(fullTag, newTag);
  }

  if (count > 0) {
    fs.writeFileSync(SVG_PATH, svgContent);
    console.log(`\nSuccess! Updated SVG file: ${SVG_PATH}`);
    console.log(`New SVG size: ${(fs.statSync(SVG_PATH).size / 1024).toFixed(2)} KB`);
  } else {
    console.log('No embedded base64 images found.');
  }
}

main().catch(err => {
  console.error('Error running extractor:', err);
});
