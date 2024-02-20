const { Router } = require("express");
const {
    signUp,
    getUsers,
    UpdateUser,
    getUserById,
} = require("../controllers/userController");


const router = Router();



/**
 * @swagger
 * /users:
 *  get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     description: Get all Users
 *     responses:
 *      200:
 *         description: users successfully obtained
 *      500:
 *         description: Internal Server Error
 */
router.get("/", async (req, res) => {
    try {
        const allUsers = await getUsers();
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


/**
 * @swagger
 * /users/{id}:
 *  get:
 *     summary: Get user detail
 *     tags:
 *       - Users
 *     description: Get user detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *         type: string
 *         required: true
 *         description: User id  
 *         example: 65ce0847408d9559318c5fbd
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */

router.get("/:id", async (req, res) => {
    try {
        const result = await getUserById(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

/**
 * @swagger
 * /users/update/{id}:
 *  put:
 *     summary: Edit user
 *     tags:
 *       - Users
 *     description: Edit User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User id
 *         example: 65ce0847408d9559318c5fbd
 * 
 * 
 *     requestBody:
 *       description: A JSON object containing user information. Change the property you want to update
 *       content:
 *         application/json:
 *          
 *           example:
 *              firstName: Delwin
 *             
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */

router.put("/update/:id", async (req, res) => {
    try {
        const result = await UpdateUser(req.params.id, req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

/**
 * @swagger
 * /users/newuser:
 *  post:
 *      summary: Add new user
 *      tags:
 *       - Users
 *      description: Add new user
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *             application/json:
 *              
 *                 example:
 *                    userName: Delwin183
 *                    firstName: Delwin
 *                    lastName: Hernandez
 *                    country: Venezuela
 *                    province: Zulia
 *                    birthday: 10/08/1987
 *                    phone: +5841276424788
 *                    email: Delwin183@gmail.com
 *                    password: 123456789
 *                    instruments: piano
 *                    collaborator: yes
 *                    musical_genre: electronica
 * 
 *      responses:
 *      200:
 *          description: Success
 *      400:
 *          description: Failed
 *      500:
 *          description: Internal Server Error
 */

router.post("/newuser", async (req, res) => {
    try {
        const newUser = await signUp(req.body);
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send((error.message));
    }
});


module.exports = router;
