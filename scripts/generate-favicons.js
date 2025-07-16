const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Function to create a makeup artist themed favicon
function createMakeupArtistFavicon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#FF9AA2'; // Soft pink background
  ctx.fillRect(0, 0, size, size);
  
  // Draw a makeup brush icon
  ctx.fillStyle = '#FFFFFF';
  
  // Brush handle
  ctx.fillRect(size * 0.3, size * 0.4, size * 0.4, size * 0.1);
  
  // Brush head
  ctx.beginPath();
  ctx.ellipse(size * 0.7, size * 0.45, size * 0.15, size * 0.1, 0, 0, 2 * Math.PI);
  ctx.fill();
  
  // Add some stylish elements
  ctx.fillStyle = '#FFB7B2'; // Lighter pink
  ctx.beginPath();
  ctx.arc(size * 0.3, size * 0.6, size * 0.1, 0, 2 * Math.PI);
  ctx.fill();
  
  return canvas;
}

// Generate favicon.ico (16x16)
const favicon16 = createMakeupArtistFavicon(16);
fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), favicon16.toBuffer('image/png'));

// Generate favicon-32x32.png
const favicon32 = createMakeupArtistFavicon(32);
fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), favicon32.toBuffer('image/png'));

// Generate apple-touch-icon.png (180x180)
const appleTouchIcon = createMakeupArtistFavicon(180);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchIcon.toBuffer('image/png'));

// For favicon.ico, we'll use the 32x32 png
fs.copyFileSync(
  path.join(publicDir, 'favicon-32x32.png'),
  path.join(publicDir, 'favicon.ico')
);

console.log('Favicon files generated successfully!');
