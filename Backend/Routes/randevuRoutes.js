const express = require("express");
const routes = express.Router();
const { create, getAll, getOne, remove } = require("../Controllers/randevuController");

routes.post("/create", create);
routes.get("/", getAll); 
routes.get("/:id", getOne); 
routes.delete("/:id", remove);
module.exports = routes; 
