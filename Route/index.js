const express = require("express");
const router = express.Router();

const { createUsers, fetchUser, fetchUsers } = require("../controllers/users");
router.post("/createUsers", createUsers);
router.get("/fetchUser/:userId", fetchUser);
router.get("/fetchUsers", fetchUsers);

module.exports = router;
