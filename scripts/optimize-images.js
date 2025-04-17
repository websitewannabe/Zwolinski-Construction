const sharp = require('sharp');
const path = require('path');

// Optimize hero image
sharp('public/images/projects/constructionHero.jpg')
  .resize(1920, 1080, {
    fit: 'cover',
    withoutEnlargement: true
  })
  .jpeg({
    quality: 80,
    progressive: true,
    mozjpeg: true
  })
  .toFile('public/images/projects/constructionHero.optimized.jpg')
  .then(() => console.log('Hero image optimized'))
  .catch(err => console.error('Error optimizing hero image:', err));

// Optimize about hero image
const aboutHeroPath = 'public/images/gallery/kitchens/IMG_6051.jpg';

// Generate optimized JPEG
sharp(aboutHeroPath)
  .resize(1920, 1080, {
    fit: 'cover',
    withoutEnlargement: true
  })
  .jpeg({
    quality: 80,
    progressive: true,
    mozjpeg: true
  })
  .toFile('public/images/gallery/kitchens/IMG_6051.optimized.jpg')
  .then(() => console.log('About hero image optimized (JPEG)'))
  .catch(err => console.error('Error optimizing about hero image (JPEG):', err));

// Generate WebP version
sharp(aboutHeroPath)
  .resize(1920, 1080, {
    fit: 'cover',
    withoutEnlargement: true
  })
  .webp({
    quality: 80,
    effort: 6
  })
  .toFile('public/images/gallery/kitchens/IMG_6051.webp')
  .then(() => console.log('About hero image optimized (WebP)'))
  .catch(err => console.error('Error optimizing about hero image (WebP):', err));

// Generate low quality placeholder
sharp(aboutHeroPath)
  .resize(20, 20, { fit: 'cover' })
  .blur(5)
  .toBuffer()
  .then(buffer => {
    const placeholder = `data:image/jpeg;base64,${buffer.toString('base64')}`;
    console.log('LQIP generated:', placeholder.substring(0, 50) + '...');
  })
  .catch(err => console.error('Error generating LQIP:', err));