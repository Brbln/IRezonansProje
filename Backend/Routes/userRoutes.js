const express = require("express");
const { registerUser, currentUser,loginUser } = require("../Controllers/userController");
const validateToken = require("../Middleware/validateTokenHandler");

const routes = express.Router();

routes.post("/register",registerUser);
routes.post("/login", loginUser);
routes.get("/current", validateToken, currentUser);

module.exports =routes;