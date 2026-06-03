import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIR = path.resolve('public');
const MAX_DIMENSION = 2000; // Resize images down to fit within 2000x2000px if they are larger
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

// Supported file extensions (case-insensitive)
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

function getFilesRecursive(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(filePath));
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function optimizeImage(filePath) {
  const originalStats = fs.statSync(filePath);
  const originalSize = originalStats.size;
  const ext = path.extname(filePath).toLowerCase();

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const image = sharp(fileBuffer);
    const metadata = await image.metadata();

    let pipeline = image;
    let resized = false;
    let targetWidth = metadata.width;
    let targetHeight = metadata.height;

    // 1. Determine if we need to resize
    if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
      pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: 'inside',
        withoutEnlargement: true
      });
      resized = true;
      // Recalculate dimensions for logs
      if (metadata.width > metadata.height) {
        targetWidth = MAX_DIMENSION;
        targetHeight = Math.round((metadata.height * MAX_DIMENSION) / metadata.width);
      } else {
        targetHeight = MAX_DIMENSION;
        targetWidth = Math.round((metadata.width * MAX_DIMENSION) / metadata.height);
      }
    }

    // 2. Set formatting options based on the file extension
    // We enforce the actual file format to match the extension.
    // e.g. collabs.jpg was actually a PNG, we convert it to JPEG to save massive space.
    let buffer;
    if (ext === '.png') {
      buffer = await pipeline
        .png({
          quality: PNG_QUALITY,
          compressionLevel: 9,
          effort: 6
        })
        .toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await pipeline
        .jpeg({
          quality: JPEG_QUALITY,
          progressive: true,
          mozjpeg: true
        })
        .toBuffer();
    }

    // 3. Write back in-place if the size is smaller
    if (buffer && buffer.length < originalSize) {
      fs.writeFileSync(filePath, buffer);
      const savedBytes = originalSize - buffer.length;
      const pct = ((savedBytes / originalSize) * 100).toFixed(1);
      const dimensionsStr = resized
        ? `[Resized: ${metadata.width}x${metadata.height} -> ${targetWidth}x${targetHeight}]`
        : `[${metadata.width}x${metadata.height}]`;

      console.log(
        `✅ Optimized: ${path.relative(TARGET_DIR, filePath)}\n` +
        `   Size: ${formatBytes(originalSize)} -> ${formatBytes(buffer.length)} (-${pct}%) ${dimensionsStr}`
      );
      return { originalSize, newSize: buffer.length, status: 'optimized' };
    } else {
      console.log(`ℹ️ Skipped (already optimal): ${path.relative(TARGET_DIR, filePath)} (${formatBytes(originalSize)})`);
      return { originalSize, newSize: originalSize, status: 'skipped' };
    }
  } catch (err) {
    console.error(`❌ Error processing ${path.relative(TARGET_DIR, filePath)}:`, err.message);
    return { originalSize, newSize: originalSize, status: 'error' };
  }
}

async function main() {
  console.log(`🔍 Scanning directory for images: ${TARGET_DIR}`);
  const files = getFilesRecursive(TARGET_DIR);
  console.log(`Found ${files.length} images to check.\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let optimizedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    totalOriginal += result.originalSize;
    totalNew += result.newSize;
    if (result.status === 'optimized') optimizedCount++;
    else if (result.status === 'skipped') skippedCount++;
    else if (result.status === 'error') errorCount++;
  }

  const saved = totalOriginal - totalNew;
  const pct = totalOriginal > 0 ? ((saved / totalOriginal) * 100).toFixed(1) : 0;

  console.log('\n=== Image Optimization Summary ===');
  console.log(`Total images scanned:  ${files.length}`);
  console.log(`Optimized:            ${optimizedCount}`);
  console.log(`Skipped:              ${skippedCount}`);
  console.log(`Errors:               ${errorCount}`);
  console.log(`Total size before:    ${formatBytes(totalOriginal)}`);
  console.log(`Total size after:     ${formatBytes(totalNew)}`);
  console.log(`Space saved:          ${formatBytes(saved)} (-${pct}% of total assets size)`);
}

main().catch(err => {
  console.error('Fatal error in optimizer:', err);
  process.exit(1);
});
