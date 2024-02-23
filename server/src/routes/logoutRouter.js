const { Router } = require('express');
const router = Router();
const { sessionOut } = require('../auth/loginController');

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: User logout
 *     tags:
 *       - Authentication
 *     description: Logout and invalidate the current session
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             example:
 *               message: Logout successful
 *       500:
 *         description: Internal Server Error
 */


// Ruta para cerrar sesión
router.post('/', sessionOut);

module.exports = router;