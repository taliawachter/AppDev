//TALIA WACHTER - 324233048
//SHANI ATTIAS - 323022129

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts',
      required : true
    },
    text: {
      type: String,
      required: true
    }
  });

  const commentModel = mongoose.model("comments", commentSchema)

  module.exports =  {commentModel,commentSchema};
