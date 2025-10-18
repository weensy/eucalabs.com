const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/test');

// Create test directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const testPositions = [52, 53, 54, 55, 56];

async function generateTestIcons() {
  for (const yPos of testPositions) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="15" fill="#A9C7C5"/>
  <text
    x="50"
    y="${yPos}"
    font-family="serif"
    font-size="60"
    font-weight="300"
    fill="#FFFFFF"
    text-anchor="middle"
    dominant-baseline="middle"
  >E</text>
</svg>`;

    await sharp(Buffer.from(svg))
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, `test-y${yPos}.png`));

    console.log(`✓ Generated test-y${yPos}.png`);
  }

  console.log(`\n✓ Test images saved to public/test/`);
  console.log('Check each file to find the best centered position!');
}

generateTestIcons().catch(console.error);
