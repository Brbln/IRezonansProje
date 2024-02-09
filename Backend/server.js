const express = require("express");
const errorHandler = require("./Middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts",require("./Routes/contactRoutes"));
app.use("/api/users",require("./Routes/userRoutes"));
app.use("/api/admins",require("./Routes/adminRoutes"));
app.use("/api/randevus",require("./Routes/randevuRoutes"));
app.use("/api/videos",require("./Routes/videoRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});