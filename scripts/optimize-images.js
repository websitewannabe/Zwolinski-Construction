
const sharp = require('sharp');
const path = require('path');

// Optimize home hero image
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
  .then(() => console.log('Home hero image optimized'))
  .catch(err => console.error('Error optimizing home hero image:', err));

// Optimize about hero image
sharp('public/images/gallery/kitchens/IMG_6051.jpg')
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
  .then(() => console.log('About hero image optimized'))
  .catch(err => console.error('Error optimizing about hero image:', err));
