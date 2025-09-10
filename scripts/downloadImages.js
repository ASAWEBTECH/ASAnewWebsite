const fs = require('fs');
const path = require('path');
const https = require('https');
const { courses } = require('../src/data/cursosData');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, {
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
};

const downloadImages = async () => {
  const outputDir = path.join(__dirname, '../public/course-images');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const course of courses) {
    const filename = path.join(outputDir, `${course.cod.toLowerCase().replace(/\s+/g, '-')}.jpg`);
    try {
      await downloadImage(course.image, filename);
      console.log(`Downloaded: ${course.cod}`);
    } catch (err) {
      console.error(`Failed to download ${course.cod}:`, err);
    }
  }
};

downloadImages();
