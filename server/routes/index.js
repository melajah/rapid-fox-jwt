const router = require("express").Router();
const bookRoute = require("./bookRoute");
const UserController = require("../controllers/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use("/books", bookRoute);

module.exports = router;
