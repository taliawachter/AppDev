const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js")

router.get("/All",postController.getAllposts)

router.get("/:id", postController.getPost)


module.exports = router;