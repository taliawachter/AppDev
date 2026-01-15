const {postModel} = require("../model/postModel.js")

const getAllposts = async (req , res)=>{
    try {
        const posts = await postModel.find({});
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
      }
}


module.exports = {getAllposts}
