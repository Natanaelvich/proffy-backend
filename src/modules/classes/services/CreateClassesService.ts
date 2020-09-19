import Schedule from '@modules/schedule/infra/typeorm/entities/Schedule';
import ScheduleRepository from '@modules/schedule/infra/typeorm/repositories/ScheduleRepository';
import CreateScheduleService from '@modules/schedule/services/CreateScheduleService';
import { inject, injectable } from 'tsyringe';
import Classe from '../infra/typeorm/entities/Classe';
import IClassesRepository from '../repositories/IClassesRepository';

interface Request {
  user_id: string;
  subject: string;
  cost: number;
  week_day: number;
  from: number;
  to: number;
}

@injectable()
class CreateAppointmentsService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute({
    user_id,
    subject,
    cost,
    week_day,
    from,
    to,
  }: Request): Promise<{ classe: Classe; schedule: Schedule }> {
    const classe = await this.classesRepository.create({
      subject,
      cost,
      user_id,
    });

    const scheduleRepository = new ScheduleRepository();

    const createScheduleService = new CreateScheduleService(scheduleRepository);

    const schedule = await createScheduleService.execute({
      week_day,
      from,
      to,
    });

    return { classe, schedule };
  }
}

export default CreateAppointmentsService;
