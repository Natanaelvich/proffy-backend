import '@modules/users/providers';

import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { container } from 'tsyringe';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
