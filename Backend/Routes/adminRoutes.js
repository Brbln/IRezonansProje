import 'express'
import { routes } from express.Router();
import { create, getAll, getOne, update, remove } from "../Controllers/adminController"
import validateToken from "../Middleware/validateTokenHandler"

routes.use(validateToken);
routes.route("/").get(getAll);

routes.route("/create").post(create);

routes.route("/:id").get(getOne);

routes.route("/:id").put(update);

routes.route("/:id").delete(remove);

module.exports = routes;
