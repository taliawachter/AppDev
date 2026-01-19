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

const getUser = async (req, res) => {
    try {
      const userId = req.params.id;

      const userData = await userModel.findById(userId);
      if (!userData) {
        res.status(400).json({
          message: "Requested user does not exist",
        });
        return;
      }

      res.status(200).json({
        message: "User retrieved successfully",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve user",
        error: error.message,
      });
    }
  };


module.exports = { getAllUsers, getUser };