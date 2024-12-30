const MaintainUser = require("../models/maintainerModel");
const initializeDefaultUser = async () => {
    try {
        const email = "admin@coolkidsnetwork.com";
        const existingUser = await MaintainUser.findOne({ email });

        if (!existingUser) {
            const newUser = await MaintainUser.create({
                firstName: "Admin",
                lastName: "User",
                email,
                role: "admin",
            });
            console.log("Default user created:", newUser);
        } else {
            console.log("Default user already exists:", existingUser.email);
        }
    } catch (error) {
        console.error("Error initializing default user:", error);
    }
};

module.exports = { initializeDefaultUser };
