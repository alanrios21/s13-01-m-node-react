const { signIn } = require("../auth/loginController");
const { Router } = require("express");

const router = Router();



/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Authentication
 *     description: Authenticate user and generate a token
 *     requestBody:
 *       description: A JSON object containing login information
 *       content:
 *         application/json:
 *           example:
 *             email: example@example.com
 *             password: mypassword
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Bad request or invalid credentials
 */



router.post("/", async (req, res) => {
    try {
        const login = await signIn(req.body, req);

        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(JSON.parse(error.message));
    }
});

module.exports = router;
