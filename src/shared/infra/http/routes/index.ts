import classesRouter from '@modules/Classes/infra/http/routes/classes.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/classes', classesRouter);

export default routes;
