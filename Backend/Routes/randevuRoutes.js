const express = require("express");
const router = express.Router();
const { create, getAll, getOne, remove } = require("../Controllers/randevuController");

router.post("/create", create);
router.get("/", getAll); 
router.get("/:id", getOne); 
router.delete("/:id", remove);
module.exports = router; 
