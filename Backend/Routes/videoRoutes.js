const express = require('express');
const routes = express.Router();
const { create, getAll, remove, getOne, update } = require('../Controllers/videoController');

routes.post("/create", create);
routes.get("/All", getAll);
routes.get("/:id", getOne);
routes.delete("/:id", remove);
routes.put("/:id",update);

module.exports = routes;
