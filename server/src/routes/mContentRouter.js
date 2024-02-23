// mContentRoute.js
const prisma = require("../db");
const multer = require('multer');
const { Router } = require('express');
const router = Router();
const { uploadImage, uploadVideo, uploadMusic, deleteFile } = require('../utils/cloudinary/cloudinary.service');
const CloudinaryProvider = require('../utils/cloudinary/cloudinaryConfig');



// ! Middleware para verificar si hay un usuario autenticado o inicio la sesion.
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized, Please log in with email and password' });
    }
};
// Configurar multer para manejar la carga de archivos en memoria
const upload = multer();

// Configuración de multer para la carga de videos
const uploadV = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 500, // Limite de tamaño del archivo (500 MB)
    },
});

// Configuración de multer para la carga de música
const uploadM = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 500, // Límite de tamaño del archivo (500 MB)
    },
});

CloudinaryProvider();


/**
 * @swagger
 * /upload/image:
 *   post:
 *     summary: Upload Images
 *     tags:
 *       - Multimedia Content
 *     description: Add image 
 *     security:
 *       - sessionAuth: []  # Referencia al esquema de seguridad definido en swagger.js
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             example:
 *               url: "https://cloudinary.com/image.jpg"
 *       '400':
 *         description: Bad request or no image file provided
 *       '401':
 *         description: Unauthorized, Please log in with email and password
 *       '500':
 *         description: Internal Server Error
 */

// Ruta para cargar imágenes
router.post('/upload/image', isAuthenticated, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }
        const result = await uploadImage(req.file);

        // Crear un nuevo Image en la base de datos con la URL de Cloudinary
        const image = await prisma.image.create({
            data: {
                url: result.url,
                userId: req.session.userId
            },
        });


        res.status(200).json(image);
    } catch (error) {
        console.error(error);
        res.status(500).json({ alert: 'Error loading image', error: error.message });
    }
});


/**
 * @swagger
 * /upload/video:
 *   post:
 *     summary: Upload Videos
 *     tags:
 *       - Multimedia Content
 *     description: Add Video 
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               video:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Video uploaded successfully
 *         content:
 *           application/json:
 *             example:
 *               url: "https://cloudinary.com/video.mp4"
 *       '400':
 *         description: Bad request or no video file provided
 *       '401':
 *         description: Unauthorized, Please log in with email and password
 *       '500':
 *         description: Internal Server Error
 */

// Ruta para cargar videos
router.post('/upload/video', isAuthenticated, uploadV.single('video'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No video file provided' });
        }
        const result = await uploadVideo(req.file);

        // Crear un nuevo Video en la base de datos con la URL de Cloudinary
        const video = await prisma.video.create({
            data: {
                url: result.url,
                userId: req.session.userId
            },
        });

        res.status(200).json(video);
    } catch (error) {
        console.error(error);
        res.status(500).json({ alert: 'Error loading video', erorr: error.message });
    }
});


/**
 * @swagger
 * /upload/music:
 *   post:
 *     summary: Upload Music Tracks
 *     tags:
 *       - Multimedia Content
 *     description: Add music track
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               track:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Music track uploaded successfully
 *         content:
 *           application/json:
 *             example:
 *               url: "https://cloudinary.com/music.mp3"
 *       '400':
 *         description: Bad request or no music file provided
 *       '401':
 *         description: Unauthorized, Please log in with email and password
 *       '500':
 *         description: Internal Server Error
 */

// Ruta para cargar música
router.post('/upload/music', isAuthenticated, uploadM.single('track'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No music file provided' });
        }
        const result = await uploadMusic(req.file);

        // Crear un nuevo Video en la base de datos con la URL de Cloudinary
        const video = await prisma.music.create({
            data: {
                url: result.url,
                userId: req.session.userId
            },
        });

        res.status(200).json(video);
    } catch (error) {
        console.error(error);
        res.status(500).json({ alert: 'Error loading music file', erorr: error.message });
    }
});


/**
 * @swagger
 * /{type}/{id}:
 *   delete:
 *     summary: Delete Musics, Videos o Tracks
 *     tags:
 *       - Multimedia Content
 *     description: Delete Musics, Videos o Tracks
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         description: Type of the file (image, video, music)
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: ID of the file
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               message: "File deleted successfully"
 *       '400':
 *         description: Bad request or invalid file type
 *       '401':
 *         description: Unauthorized, Please log in with email and password
 *       '404':
 *         description: File not found
 *       '500':
 *         description: Internal Server Error
 */

// Ruta para eliminar archivos
router.delete('/:type/:id', isAuthenticated, async (req, res) => {
    const { type, id } = req.params;

    try {
        let model;
        let field;
        let modelName;

        switch (type) {
            case 'image':
                model = prisma.image;
                field = 'images';
                modelName = 'Image';
                break;
            case 'video':
                model = prisma.video;
                field = 'videos';
                modelName = 'Video';
                break;
            case 'music':
                model = prisma.music;
                field = 'music';
                modelName = 'Music';
                break;
            default:
                return res.status(400).json({ error: 'Invalid file type' });
        }

        // Find the user by ID
        const user = await prisma.user.findUnique({
            where: { id: req.session.userId },
            include: {
                [field]: true, // Include the field (images, videos, music) in the query
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find the file by ID
        const fileIndex = user[field].findIndex((file) => file.id === id);

        if (fileIndex === -1) {
            return res.status(404).json({ error: `${modelName} not found` });
        }

        // Extract publicId from Cloudinary URL
        const publicId = user[field][fileIndex].url.split('/').pop().split('.')[0];

        // Delete file from Cloudinary
        await deleteFile(publicId);

        // Remove the file from the array
        user[field].splice(fileIndex, 1);

        // Update the user record in the database
        await prisma.user.update({
            where: { id: req.session.userId },
            data: {
                [field]: {
                    set: user[field],
                },
            },
        });

        res.status(200).json({ message: `${modelName} deleted successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ alert: 'Error deleting file' }, error.message);
    }
});



module.exports = router;


