const express = require("express");
const router = express.Router();
const userController = require("../controller/UsersController.js")

router.get("/All",userController.getAllUsers)
router.get("/:id", userController.getUser)


module.exports = router;