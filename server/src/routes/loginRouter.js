const { signIn } = require("../auth/loginController");
const { Router } = require("express");

const router = Router();

router.post("/", async (req, res) => {
    try {
        const login = await signIn(req.body, req);

        res.status(200).send(login);
    } catch (error) {
        res.status(400).send(JSON.parse(error.message));
    }
});

module.exports = router;
