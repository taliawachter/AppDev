const express = require('express');
const router = express.Router();
const commentController = require("../controller/commentController.js")

router.get('/AllComments/:postId', commentController.getAllCommentsByPostId);

router.post('/CreateComment', commentController.createComment);

router.put('/UpdateComment', commentController.updateComment);

router.delete('/delete', commentController.deleteComment);

module.exports = router;