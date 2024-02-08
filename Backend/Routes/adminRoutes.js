const express = require('express');
const router = express.Router();
const { create, getAll, getOne, update, remove } = require("../Controllers/adminController");
const validateToken =require("../Middleware/validateTokenHandler")

router.use(validateToken);
router.route("/").get(getAll);

router.route("/create").post(create);

router.route("/:id").get(getOne);

router.route("/:id").put(update);

router.route("/:id").delete(remove);

module.exports = router;
