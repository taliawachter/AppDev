const userModel = require("../model/userModel.js");

const getAllUsers = async (req, res) => {
  try {
    const usersList = await userModel.find();
    res.status(200).json({
      message: "Users retrieved successfully",
      data: usersList,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
};

module.exports = { getAllUsers };