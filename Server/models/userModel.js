const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    role: { type: String, enum: ["Cool Kid", "Cooler Kid", "Coolest Kid"], default: "Cool Kid" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
