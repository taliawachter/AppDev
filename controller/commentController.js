const { commentModel } = require("../model/commentModel.js");

const getAllCommentsByPostId = async (req, res) => {
  try {
    const comments = await commentModel.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error comments", error: error.message });
  }
};

  const createComment = async (req, res) => {
    try {
      const {postId} = req.body
      const post = await postModel.findById(postId)
      if(!post){
        res.status(400).json({message : "Post not found!"});
        return;
      }
      const newComment = new commentModel(req.body);
      const savedComment = await newComment.save();
      post.comments.push(savedComment)
      await post.save();
      res.status(201).json({ message: "Comment created successfully", comment: savedComment });
    } catch (error) {
      res.status(400).json({ message: "Error creating comment", error: error.message });
    }
  };

  const updateComment = async (req, res) => {
    try {
      const { id , text } = req.body;
      const updatedComment = await commentModel.findByIdAndUpdate(id, {text : text}, { new: true });
      const post = await postModel.findById(updatedComment.postId);
     if(!post){
        res.status(400).json({message : "Post not found!"});
        return;
      }
      const comment = post.comments.find(comment => comment._id == id);
      if (!comment) {
        res.status(400).json({ message: "Comment not found in the post" });
        return;
      }

      if(comment){
        comment.text = text;
      }
      await post.save();
      res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
    } catch (error) {
      res.status(400).json({ message: "Error updating comment", error: error.message });
    }
  };

const deleteComment = async (req, res) => {
  try {
    const { id } = req.body;

    const removedComment = await commentModel.findByIdAndDelete(id);
    if (!removedComment) {
      res.status(400).json({
        message: "Requested comment does not exist",
      });
      return;
    }

    const post = await postModel.findById(removedComment.postId);
    post.comments = post.comments.filter(
      (comment) => comment._id != id
    );
    await post.save();

    res.status(200).json({
      message: "Comment removed successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to remove comment",
      error: error.message,
    });
  }
};


module.exports = { getAllCommentsByPostId, createComment, updateComment, deleteComment };
