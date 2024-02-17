const express = require('express');
const routes = express.Router();
const { create, getAll, getOne, update, remove } = require("../Controllers/adminController");
const validateToken =require("../Middleware/validateTokenHandler")

routes.use(validateToken);
routes.route("/").get(getAll);

routes.route("/create").post(create);

routes.route("/:id").get(getOne);

routes.route("/:id").put(update);

routes.route("/:id").delete(remove);

module.exports = routes;
