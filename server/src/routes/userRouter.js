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
 *   
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
 *     
 * 
 * 
 *     requestBody:
 *       description: A JSON object containing user information. Change the property you want to update
 *       content:
 *         application/json:
 *          
 *           example:
 *              firstName: ""
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
 *          description: A JSON object containing user information
 *          content:
 *             application/json:
 *              
 *                 example:
 *                    userName:  ""
 *                    firstName: ""
 *                    lastName:  ""
 *                    country:   ""
 *                    province:  ""
 *                    birthday:  ""
 *                    phone: ""
 *                    email: ""
 *                    password: ""
 *                    instruments: ""
 *                    collaborator: "" 
 *                    musical_genre: ""
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
