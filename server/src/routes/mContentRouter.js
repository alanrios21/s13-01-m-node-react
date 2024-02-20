// mContentRoute.js
const prisma = require("../db");
const multer = require('multer');
const { Router } = require('express');
const router = Router();
const { uploadImage, uploadVideo, uploadMusic } = require('../utils/cloudinary/cloudinary.service');
const CloudinaryProvider = require('../utils/cloudinary/cloudinaryConfig');



// ! Middleware para verificar si hay un usuario autenticado o inicio la sesion.
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
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
 *  post:
 *      summary: Upload Images
 *      tags:
 *       - Multimedia Content
 *      description: Add image 
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *             application/json:
 *              
 *                 example:

 * 
 *      responses:
 *      200:
 *          description: Success
 *      400:
 *          description: Failed
 *      500:
 *          description: Internal Server Error
 */

// Ruta para cargar imágenes
router.post('/image', isAuthenticated, upload.single('image'), async (req, res) => {
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
        res.status(500).json({ error: 'Error loading image' });
    }
});


/**
 * @swagger
 * /upload/video:
 *  post:
 *      summary: Upload Videos
 *      tags:
 *       - Multimedia Content
 *      description: Add Video 
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *             application/json:
 *              
 *                 example:

 * 
 *      responses:
 *      200:
 *          description: Success
 *      400:
 *          description: Failed
 *      500:
 *          description: Internal Server Error
 */


// Ruta para cargar videos
router.post('/video', isAuthenticated, uploadV.single('video'), async (req, res) => {
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
        res.status(500).json({ error: 'Error loading video' });
    }
});


/**
 * @swagger
 * /upload/music:
 *  post:
 *      summary: Upload Music Tracks
 *      tags:
 *       - Multimedia Content
 *      description: Add music track
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *             application/json:
 *              
 *                 example:

 * 
 *      responses:
 *      200:
 *          description: Success
 *      400:
 *          description: Failed
 *      500:
 *          description: Internal Server Error
 */


// Ruta para cargar música
router.post('/music', isAuthenticated, uploadM.single('track'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No music file provided' });
        }
        const result = await uploadVideo(req.file);

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
        res.status(500).json({ error: 'Error loading music file' });
    }
});

module.exports = router;


