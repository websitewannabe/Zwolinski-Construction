
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
