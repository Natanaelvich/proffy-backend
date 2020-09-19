import CreateClassesService from '@modules/classes/services/CreateClassesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import convertHourToMinutes from '../../../../../shared/utils/convertHoursToMinutes';
import ClassesRepository from '../../typeorm/repositories/ClassesRepository';

export default class ClassesController {
  public async index(request: Request, response: Response): Promise<Response> {
    // const filters = request.query;
    // const classesRepository = new ClassesRepository();
    // const subject = filters.subject as string;
    // const week_day = filters.week_day as string;
    // const time = filters.time as string;
    // if (!filters.week_day || !filters.subject || !filters.time) {
    //   return response.status(400).json({
    //     error: 'Missing filters to search classes',
    //   });
    // }
    // const timeInMinutes = convertHourToMinutes(time);
    // const week_day_int = Number(week_day);
    // const classes = await classesRepository.findAll({
    //   timeInMinutes,
    //   week_day: week_day_int,
    //   subject,
    // });
    // return response.json(classes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { cost, subject, from, to, week_day } = request.body;
    const { id: user_id } = request.user;

    const createClasses = container.resolve(CreateClassesService);

    const classe_schedule = await createClasses.execute({
      user_id,
      cost,
      subject,
      from,
      to,
      week_day,
    });
    return response.json(classe_schedule);
  }
}
