const { Router } = require('express');
const router = Router();
const { sessionOut } = require('../auth/loginController');


// Ruta para cerrar sesión
router.post('/', sessionOut);

module.exports = router;