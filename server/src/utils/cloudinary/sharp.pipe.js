const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const SharpPipe = async (image) => {
    const originalName = path.parse(image.originalname).name;
    const filename = Date.now() + '-' + originalName + '.webp';

    const outputPath = path.join('uploads', filename);

    // Asegúrate de que el directorio "uploads" exista
    await fs.mkdir('uploads', { recursive: true });

    await sharp(image.buffer)
        .resize(800)
        .webp({ effort: 3 })
        .toFile(outputPath);

    // Lee el archivo recién creado en un búfer
    const optimizedImageBuffer = await fs.readFile(outputPath);

    // Elimina el archivo temporal
    await fs.unlink(outputPath);

    return optimizedImageBuffer;
};

module.exports = SharpPipe;

