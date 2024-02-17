const express = require("express");
const routes = express.Router();
const { getContact,
    getContacts,
    updateContact,
    deleteContact,
    createContact
} = require("../Controllers/contactController");
const validateToken = require("../Middleware/validateTokenHandler");

routes.use(validateToken);
routes.route("/").get(getContacts);

routes.route("/").post(createContact);

routes.route("/:id").get(getContact);

routes.route("/:id").put(updateContact);

routes.route("/:id").delete(deleteContact);

module.exports = routes;