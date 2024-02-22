
const { v2 } = require('cloudinary');
const toStream = require('buffer-to-stream');
const SharpPipe = require('./sharp.pipe'); // Asegúrate de importar SharpPipe desde la ubicación correcta



const uploadImage = async (file) => {
    try {
        // Procesar la imagen con SharpPipe
        const optimizedImagePath = await SharpPipe(file);

        // Cargar la imagen optimizada a Cloudinary
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream((error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            // Usar el archivo optimizado como entrada en lugar de file.buffer
            toStream(optimizedImagePath).pipe(upload);
        });
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante el procesamiento de la imagen
        console.error('Error al procesar la imagen:', error);
        throw error; // Puedes personalizar cómo manejar el error según tus necesidades
    }
}


const uploadVideo = async (file) => {
    try {
        // Lógica para cargar videos a Cloudinary
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream({ resource_type: 'video' }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            // Usar el buffer del archivo de video como entrada
            toStream(file.buffer).pipe(upload);
        });
    } catch (error) {
        console.error('Error al procesar el video:', error);
        throw error;
    }
};

const uploadMusic = async (file) => {
    try {
        // Lógica para cargar videos a Cloudinary
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream({ resource_type: 'video' }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            // Usar el buffer del archivo de video como entrada
            toStream(file.buffer).pipe(upload);
        });
    } catch (error) {
        console.error('Error al procesar el video:', error);
        throw error;
    }
};

const deleteFile = async (publicId) => {
    try {
        const result = await v2.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error('Error deleting file from Cloudinary:', error);
        throw error;
    }
};

module.exports = { uploadImage, uploadVideo, uploadMusic, deleteFile };



