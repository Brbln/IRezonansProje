const express = require("express");
const router = express.Router();
const { create, getAll, remove } = require("../Controllers/randevuController");

router.post("/create", create);
router.get("/all", getAll); 
router.delete("/:id", remove);
module.exports = router; 
