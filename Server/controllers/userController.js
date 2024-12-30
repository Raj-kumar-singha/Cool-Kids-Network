const User = require("../models/userModel");
const generateRandomUser = require("../utils/randomUserGenerator");

exports.signupUser = async (req, res) => {
    const { email } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered" });

        const randomUser = await generateRandomUser(email);
        const newUser = await User.create({ ...randomUser });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: "Error signing up", error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    const { role } = req.query;

    try {
        const users = await User.find();
        if (role === "Coolest Kid") {
            res.status(200).json(users);
        } else if (role === "Cooler Kid") {
            const filteredUsers = users.map(({ firstName, lastName, country }) => ({
                firstName,
                lastName,
                country,
            }));
            res.status(200).json(filteredUsers);
        } else {
            res.status(403).json({ message: "Access denied" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error fetching users", error: err.message });
    }
};

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find().select('firstName lastName email role country');
        res.status(200).json({ message: "All users", noOfUsers: users.length, Users: users });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users" });
    }
};

exports.updateUserRole = async (req, res) => {
    const { email, newRole } = req.body;
    if (!email || !newRole) {
        return res.status(400).json({ message: "Email and new role are required" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.role = newRole;
        await user.save();

        res.status(200).json({ message: "Role updated successfully", updatedUser: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update role" });
    }
};


// exports.updateUserRole = async (req, res) => {
//     const { email, role } = req.body;

//     if (!["Cool Kid", "Cooler Kid", "Coolest Kid"].includes(role)) {
//         return res.status(400).json({ message: "Invalid role" });
//     }

//     try {
//         const user = await User.findOneAndUpdate({ email }, { role }, { new: true });
//         if (!user) return res.status(404).json({ message: "User not found" });

//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json({ message: "Error updating role", error: err.message });
//     }
// };