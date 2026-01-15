const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js")

router.get("/All",postController.getAllposts)




module.exports = router;