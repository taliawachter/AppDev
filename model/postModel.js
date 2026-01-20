//TALIA WACHTER - 324233048
//SHANI ATTIAS - 323022129

const mongoose = require("mongoose");
const {commentSchema} = require("./commentModel")

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      comments: [commentSchema],
      uploadUser : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
      }
    });

  const postModel = mongoose.model("posts", postSchema);

  module.exports = {postModel}