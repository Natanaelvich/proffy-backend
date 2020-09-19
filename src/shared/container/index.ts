import '@modules/users/providers';

import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { container } from 'tsyringe';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import ScheduleRepository from '@modules/schedule/infra/typeorm/repositories/ScheduleRepository';
import IScheduleRepository from '@modules/schedule/repositories/IScheduleRepository';
import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository';

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IScheduleRepository>(
  'ScheduleRepository',
  ScheduleRepository,
);
