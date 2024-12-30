const express = require("express");
const {
    signupUser,
    loginUser,
    getAllUsers,
    updateUserRole,
    allUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/allUsrs", getAllUsers);
router.get("/all-users", allUsers);
router.put("/update-role", updateUserRole);

module.exports = router;
