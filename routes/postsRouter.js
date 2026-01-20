const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js")

router.get("/Allposts",postController.getAllposts)

router.get("/posts/:id", postController.getPost)

router.get("/posts/upload", postController.getPostByuploadId)

router.post("/posts/create", postController.createPost)

router.put("/update/:id", postController.updatePost)

router.delete("/delete", postController.deletePost)

module.exports = router;