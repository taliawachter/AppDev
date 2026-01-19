const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")

router.get("/All",userController.getAllUsers)
router.get("/:id", userController.getUser)
router.post("/users/create", userController.createUser)
router.put("/update", userController.updateUser)
router.delete("/delete", userController.deleteUser)

module.exports = router;