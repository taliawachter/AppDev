const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js")

router.get("/Allposts",postController.getAllposts)

router.get("/uploader", postController.getPostByuploadId)

router.post("/create", postController.createPost)

router.delete("/delete", postController.deletePost)

router.put("/update/:id", postController.updatePost)

router.get("/:id", postController.getPost)


module.exports = router;