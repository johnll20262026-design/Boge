import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = 'https://boge.pages.dev';
const outputDir = path.join(__dirname, '../public/images');
const outputPath = path.join(outputDir, 'boge-qr.svg');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24"/>
      <stop offset="100%" style="stop-color:#b45309"/>
    </linearGradient>
  </defs>
  <circle cx="40" cy="40" r="38" fill="url(#g)"/>
  <circle cx="40" cy="40" r="33" fill="#fef3c7"/>
  <text x="40" y="55" text-anchor="middle" font-family="Georgia, serif" font-size="38" font-weight="bold" fill="#78350f">波</text>
</svg>`;

QRCode.toString(siteUrl, {
  type: 'svg',
  width: 512,
  margin: 2,
  errorCorrectionLevel: 'H',
  color: {
    dark: '#78350f',
    light: '#ffffff'
  }
}, (err, svgString) => {
  if (err) {
    console.error('生成二维码失败:', err);
    process.exit(1);
  }

  const logoSize = 100;
  const qrSize = 512;
  const logoX = (qrSize - logoSize) / 2;
  const logoY = (qrSize - logoSize) / 2;

  const whiteRect = `<rect x="${logoX - 8}" y="${logoY - 8}" width="${logoSize + 16}" height="${logoSize + 16}" fill="white" rx="12"/>`;
  const logoScaled = logoSvg.replace('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"', `<svg xmlns="http://www.w3.org/2000/svg" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}"`);

  const finalSvg = svgString.replace('</svg>', `${whiteRect}${logoScaled}</svg>`);

  fs.writeFileSync(outputPath, finalSvg, 'utf8');
  console.log(`✅ 二维码已生成: ${outputPath}`);
  console.log(`   网址: ${siteUrl}`);
});
