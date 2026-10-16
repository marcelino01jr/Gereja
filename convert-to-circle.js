const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Fungsi untuk membuat gambar bulat dengan background transparan
async function createCircularIcon(inputPath, outputPath, size) {
  try {
    // Buat SVG circle mask
    const circleMask = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>`
    );

    // Process image
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: circleMask,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Created: ${path.basename(outputPath)} (${size}x${size})`);
  } catch (error) {
    console.error(`❌ Error creating ${outputPath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🔵 Converting favicon to circular shape...\n');

  const inputFile = 'favicon-32x32.png';
  const publicDir = './public';

  // Check if input file exists
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ File not found: ${inputFile}`);
    console.log('Please make sure favicon-32x32.png exists in the root directory.');
    process.exit(1);
  }

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log(`📁 Created directory: ${publicDir}\n`);
  }

  try {
    // Create circular icons in different sizes
    await createCircularIcon(inputFile, path.join(publicDir, 'favicon-16x16.png'), 16);
    await createCircularIcon(inputFile, path.join(publicDir, 'favicon-32x32.png'), 32);
    await createCircularIcon(inputFile, path.join(publicDir, 'apple-touch-icon.png'), 180);
    
    // For favicon.ico, we'll use the 32x32 version
    console.log('\n📋 Copying favicon-32x32.png as favicon.ico...');
    fs.copyFileSync(
      path.join(publicDir, 'favicon-32x32.png'),
      path.join(publicDir, 'favicon.ico')
    );
    console.log('✅ Created: favicon.ico');

    console.log('\n✨ All circular favicons created successfully!');
    console.log('\n📁 Files created in /public/:');
    console.log('   - favicon-16x16.png (16x16, circular)');
    console.log('   - favicon-32x32.png (32x32, circular)');
    console.log('   - apple-touch-icon.png (180x180, circular)');
    console.log('   - favicon.ico (32x32, circular)');
    console.log('\n🌐 Refresh your browser with Ctrl+Shift+R to see the changes!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
