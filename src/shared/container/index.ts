import ClassesRepository from '@modules/Classes/infra/typeorm/repositories/ClassesRepository';
import IClassesRepository from '@modules/Classes/repositories/IClassesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);
