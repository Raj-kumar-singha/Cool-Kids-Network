const express = require("express");
const {
    signupUser,
    loginUser,
    getAllUsers,
    updateUser,
    deleteUser
} = require("../controllers/maintainerController");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/all-maintainers", getAllUsers);
router.put("/:email", updateUser);
router.delete("/:email", deleteUser);

module.exports = router;
