//TALIA WACHTER - 324233048
//SHANI ATTIAS - 323022129

const express = require('express');
const router = express.Router();
const commentController = require("../controller/commentController.js")


router.post('/create', commentController.createComment);

router.put('/update', commentController.updateComment);

router.delete('/delete', commentController.deleteComment);

router.get("/AllComments-post/:postId", commentController.getAllCommentsByPostId);


module.exports = router;