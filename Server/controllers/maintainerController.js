const MaintainerUser = require("../models/maintainerModel");

exports.signupUser = async (req, res) => {
    const { email, firstName, lastName } = req.body;
    try {
        const existingUser = await MaintainerUser.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered" });

        const newUser = new MaintainerUser({
            email,
            firstName,
            lastName,
            role: "admin",
        });
        await newUser.save();
        res.status(201).json({ message: "Maintainer User Created Successfully", User: newUser });
    } catch (err) {
        res.status(500).json({ message: "Error signing up", error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await MaintainerUser.findOne({ email });
        if (!user) return res.status(404).json({ message: "Maintainer User not found" });
        res.status(200).json({ message: "Maintainer User Logged In successfully", User: user });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await MaintainerUser.find();
        res.status(200).json({ message: "All Maintainer users", Users: users });
    } catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { email } = req.params;
    const { firstName, lastName } = req.body;
    try {
        const user = await MaintainerUser.findOneAndUpdate(
            { email },
            { firstName, lastName },
            { new: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "Maintainer User Updated Successfully", User: user });
    } catch (err) {
        res.status(500).json({ message: "Error updating user", error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await MaintainerUser.findOneAndDelete({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting user", error: err.message });
    }
};
