const express = require("express");
const router = express.Router();
const userController = require("../controller/UsersController.js")

router.get("/All",userController.getAllUsers)
router.get("/:id", userController.getUser)
router.post("/create", userController.createUser)
router.put("/update", userController.updateUser)

module.exports = router;