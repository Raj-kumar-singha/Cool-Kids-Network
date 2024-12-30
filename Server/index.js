const express = require("express"),
    app = express(),
    { connectDB } = require("./config/dbConfig"),
    { PORT } = require("./config/serverConfig"),
    cors = require('cors'),
    userRoutes = require("./routes/userRoutes"),
    maintainUsersRoutes = require("./routes/maintainerUserRoutes"),
    { initializeDefaultUser } = require("./services/initializeUserService");


app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v0", userRoutes);
app.use("/api/v0/maitain-users", maintainUsersRoutes);

// Database connection
connectDB().then(async () => {
    await initializeDefaultUser();
}).catch((err) => {
    console.error("Error connecting to the database:", err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
});
