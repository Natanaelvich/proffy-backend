import { Router } from 'express';
import multer from 'multer';
import upload from '@config/upload';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UpdateAvatarController from '../controllers/UpdateAvatarController';

const usersController = new UsersController();
const updateAvatarController = new UpdateAvatarController();

const usersRouter = Router();

const uploader = multer(upload);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploader.single('avatar'),
  updateAvatarController.update,
);
export default usersRouter;
