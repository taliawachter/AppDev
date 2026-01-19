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

  const createUser = async (req, res) => {
    try {
      const userToCreate = new userModel(req.body);
      const createdUser = await userToCreate.save();

      res.status(201).json({
        message: "User registered successfully",
        data: createdUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to create user",
        error: error.message,
      });
    }
  };

const updateUser = async (req, res) => {
    try {
      const { id } = req.body;
      const updatePayload = req.body;

      const modifiedUser = await userModel.findByIdAndUpdate(
        id,
        updatePayload
      );

      if (!modifiedUser) {
        res.status(400).json({
          message: "Requested user was not found",
        });
        return;
      }

      res.status(200).json({
        message: "User details updated",
        data: modifiedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to update user",
        error: error.message,
      });
    }
  };

 const deleteUser = async (req, res) => {
    try {
      const { id } = req.body;

      await userModel.findByIdAndDelete(id);

      res.status(200).json({
        message: "User removed successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to delete user",
        error: error.message,
      });
    }
  };


module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };