const express = require('express');
const router = express.Router();
const { create, getAll, remove, getOne, update } = require('../Controllers/videoController');

router.post("/create", create);
router.get("/All", getAll);
router.get("/:id", getOne);
router.delete("/:id", remove);
router.put("/:id",update);

module.exports = router;
