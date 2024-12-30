const mongoose = require("mongoose");

const maintainerSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, default: "admin" },
}, { timestamps: true });

module.exports = mongoose.model("Maintainer", maintainerSchema);
