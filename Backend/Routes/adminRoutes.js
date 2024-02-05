const express = require('express');
const routes = express.Router();
const { create, getAll, getOne, update, remove } = require("../Controllers/adminController");

routes.post('/api/admins/createAdmin', create);
routes.put('/api/admins/updateAdmin/:id', update);
routes.get('/api/admins/getAdmins', getAll); // Endpoint'i /getAdmins olarak değiştirildi
routes.get('/api/admins/getAdmin/:id', getOne);
routes.delete('/api/admins/removeAdmin/:id', remove);

module.exports = routes;