import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/users", (request, response) => {
  response.status(401).json({ error: "hahahaha" });
});

routes.post("/classes", classesController.store);
routes.get("/classes", classesController.index);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.store);

export default routes;
