
const sharp = require('sharp');
const path = require('path');

// Optimize hero image
sharp('public/images/projects/constructionHero.jpg')
  .resize(1600, null, {
    withoutEnlargement: true,
    fit: 'inside'
  })
  .webp({ quality: 80 })
  .toFile('public/images/projects/constructionHero.webp')
  .then(() => console.log('Hero WebP created'))
  .catch(err => console.error('Error creating WebP:', err));

// Create optimized JPEG fallback
sharp('public/images/projects/constructionHero.jpg')
  .resize(1600, null, {
    withoutEnlargement: true,
    fit: 'inside'
  })
  .jpeg({ quality: 80, progressive: true })
  .toFile('public/images/projects/constructionHero.optimized.jpg')
  .then(() => console.log('Hero JPEG optimized'))
  .catch(err => console.error('Error optimizing JPEG:', err));
