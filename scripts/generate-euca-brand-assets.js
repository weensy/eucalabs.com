const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/brand');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const COLORS = {
  euca: '#A9C7C5',
  ink: '#222222',
  paper: '#FFFCF8',
  mist: '#F4F7F6',
  white: '#FFFFFF',
};

function writeFile(name, content) {
  fs.writeFileSync(path.join(outputDir, name), content);
}

function dataUriSvg(svg) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

// Preserve the cute, clean overlapping-leaves silhouette the user selected.
function eucaMark(fill, stroke = fill) {
  return `
    <g fill="${fill}">
      <ellipse cx="45" cy="42" rx="10" ry="18" transform="rotate(-26 45 42)"/>
      <ellipse cx="58" cy="58" rx="10" ry="18" transform="rotate(24 58 58)"/>
    </g>
    <rect
      x="48.5"
      y="31"
      width="3"
      height="42"
      rx="1.5"
      fill="${stroke}"
      transform="rotate(-10 50 50)"
    />
  `;
}

function markSvg({ tile = false, fill = COLORS.ink, stroke = fill }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    ${tile ? `<rect width="100" height="100" rx="22" fill="${COLORS.euca}"/>` : ''}
    ${eucaMark(fill, stroke)}
  </svg>`;
}

function wordmarkSvg({ centered = false, large = false }) {
  const fontSize = large ? 104 : 82;
  const labsSize = large ? 25 : 20;
  const eucaX = centered ? 400 : 300;
  const labsX = centered ? 533 : 532;

  return `
    <text
      x="${eucaX}"
      y="${large ? 504 : 144}"
      ${centered ? 'text-anchor="middle"' : ''}
      fill="${COLORS.ink}"
      font-size="${fontSize}"
      font-family="Georgia, 'Times New Roman', serif"
      letter-spacing="-2.8"
    >Euca</text>
    <text
      x="${labsX}"
      y="${large ? 504 : 144}"
      fill="${COLORS.ink}"
      opacity="0.58"
      font-size="${labsSize}"
      font-family="Arial, sans-serif"
      letter-spacing="${large ? 7.2 : 5.8}"
    >LABS</text>
  `;
}

function horizontalLockupSvg() {
  const mark = dataUriSvg(markSvg({ fill: COLORS.ink, stroke: COLORS.ink }));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 1200 320">
    <rect width="1200" height="320" rx="36" fill="${COLORS.paper}"/>
    <circle cx="170" cy="160" r="86" fill="${COLORS.euca}" opacity="0.24"/>
    <image href="${mark}" x="95" y="85" width="150" height="150"/>
    ${wordmarkSvg({ centered: false, large: false })}
    <text x="300" y="192" fill="${COLORS.ink}" opacity="0.6" font-size="28" font-family="Arial, sans-serif" letter-spacing="0.2">Calm digital products, built with intent.</text>
  </svg>`;
}

function stackedLockupSvg() {
  const mark = dataUriSvg(markSvg({ fill: COLORS.ink, stroke: COLORS.ink }));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="860" viewBox="0 0 800 860">
    <rect width="800" height="860" rx="44" fill="${COLORS.paper}"/>
    <circle cx="400" cy="236" r="124" fill="${COLORS.euca}" opacity="0.24"/>
    <image href="${mark}" x="292" y="128" width="216" height="216"/>
    <g transform="translate(-52 0)">
      ${wordmarkSvg({ centered: true, large: true })}
    </g>
    <text x="400" y="538" text-anchor="middle" fill="${COLORS.ink}" opacity="0.6" font-size="30" font-family="Arial, sans-serif">Calm digital products, built with intent.</text>
  </svg>`;
}

function previewSheetSvg() {
  const tile = dataUriSvg(markSvg({ tile: true, fill: COLORS.white, stroke: COLORS.white }));
  const mono = dataUriSvg(markSvg({ fill: COLORS.ink, stroke: COLORS.ink }));
  const horizontal = dataUriSvg(horizontalLockupSvg());
  const stacked = dataUriSvg(stackedLockupSvg());

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1180" viewBox="0 0 1600 1180">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${COLORS.paper}"/>
        <stop offset="58%" stop-color="${COLORS.mist}"/>
        <stop offset="100%" stop-color="#F3EBE0"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="1180" fill="url(#bg)"/>
    <text x="60" y="52" fill="${COLORS.ink}" font-size="34" font-family="Georgia, 'Times New Roman', serif">Euca Labs brand development from the selected favicon mark</text>
    <text x="60" y="84" fill="${COLORS.ink}" opacity="0.62" font-size="18" font-family="Arial, sans-serif">Same overlapping-leaf symbol, now organized into a usable logo set.</text>

    <rect x="60" y="132" width="360" height="360" rx="34" fill="#FFFFFF" opacity="0.88"/>
    <text x="88" y="176" fill="${COLORS.ink}" font-size="24" font-family="Arial, sans-serif">App / Favicon Tile</text>
    <image href="${tile}" x="120" y="226" width="240" height="240"/>

    <rect x="460" y="132" width="360" height="360" rx="34" fill="#FFFFFF" opacity="0.88"/>
    <text x="488" y="176" fill="${COLORS.ink}" font-size="24" font-family="Arial, sans-serif">Monochrome Mark</text>
    <image href="${mono}" x="520" y="226" width="240" height="240"/>

    <rect x="860" y="132" width="680" height="360" rx="34" fill="#FFFFFF" opacity="0.88"/>
    <text x="888" y="176" fill="${COLORS.ink}" font-size="24" font-family="Arial, sans-serif">Horizontal Lockup</text>
    <image href="${horizontal}" x="900" y="226" width="600" height="160"/>

    <rect x="60" y="540" width="1480" height="560" rx="34" fill="#FFFFFF" opacity="0.88"/>
    <text x="88" y="586" fill="${COLORS.ink}" font-size="24" font-family="Arial, sans-serif">Stacked Lockup</text>
    <image href="${stacked}" x="400" y="630" width="800" height="430"/>
  </svg>`;
}

async function writePng(name, svg, size) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(path.join(outputDir, name));
}

async function main() {
  const tileSvg = markSvg({ tile: true, fill: COLORS.white, stroke: COLORS.white });
  const markMonoSvg = markSvg({ fill: COLORS.ink, stroke: COLORS.ink });
  const markWhiteSvg = markSvg({ fill: COLORS.white, stroke: COLORS.white });
  const horizontalSvg = horizontalLockupSvg();
  const stackedSvg = stackedLockupSvg();
  const previewSvg = previewSheetSvg();

  writeFile('euca-mark-tile.svg', tileSvg);
  writeFile('euca-mark.svg', markMonoSvg);
  writeFile('euca-mark-white.svg', markWhiteSvg);
  writeFile('euca-logo-horizontal.svg', horizontalSvg);
  writeFile('euca-logo-stacked.svg', stackedSvg);

  await writePng('euca-mark-tile-512.png', tileSvg, 512);
  await writePng('euca-mark-tile-180.png', tileSvg, 180);
  await writePng('euca-mark-tile-32.png', tileSvg, 32);
  await writePng('euca-mark-512.png', markMonoSvg, 512);
  await sharp(Buffer.from(horizontalSvg)).png().toFile(path.join(outputDir, 'euca-logo-horizontal.png'));
  await sharp(Buffer.from(stackedSvg)).png().toFile(path.join(outputDir, 'euca-logo-stacked.png'));
  await sharp(Buffer.from(previewSvg)).png().toFile(path.join(outputDir, 'euca-brand-sheet.png'));

  console.log('Generated brand assets in public/brand');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
