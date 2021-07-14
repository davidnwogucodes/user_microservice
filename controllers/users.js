const User = require("../models/user.model");

module.exports = {
  createUsers: async (req, res) => {
    try {
      const { Name, Email } = req.body;
      if (!Name || !Email) {
        res.json({
          message: "invalid input fields",
        });
      }
      const users = new User({
        Name,
        Email,
      });
      const isSaved = await users.save();
      if (!isSaved) {
        return res.json({
          status: false,
          message: "unable to save to database",
        });
      }
      res.json({
        success: true,
        message: "user created successfully",
      });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },

  fetchUsers: async (req, res) => {
    try {
      const users = await User.find({});
      if (!users) {
        return res.json({ status: false, message: "unable to get users" });
      }
      res.json({
        success: true,
        data: users,
      });
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
  },

  fetchUser: async (req, res) => {
    const userId = req.params.userId;
    try {
      const getUser = await User.findOne({ _id: userId });

      if (!getUser) {
        return res.json({ status: false, message: "unable to get user" });
      }
      res.json({ getUser });
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
  },
};
