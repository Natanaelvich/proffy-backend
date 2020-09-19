import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const classesController = new ClassesController();

const classesRouter = Router();

classesRouter.use(ensureAuthenticated);

classesRouter.post('/', classesController.create);

export default classesRouter;
