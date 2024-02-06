const express = require('express');
const router = express.Router();
const { create, getAll, getOne, update, remove } = require("../Controllers/adminController");
const validateToken =require("../Middleware/validateTokenHandler")

// routes.post('/api/admins/createAdmin', create);
// routes.put('/api/admins/updateAdmin/:id', update);
// routes.get('/api/admins/getAdmins', getAll);
// routes.get('/api/admins/getAdmin/:id', getOne);
// routes.delete('/api/admins/removeAdmin/:id', remove);

router.use(validateToken);
router.route("/").get(getAll);

router.route("/create").post(create);

router.route("/:id").get(getOne);

router.route("/:id").put(update);

router.route("/:id").delete(remove);

module.exports = router;
