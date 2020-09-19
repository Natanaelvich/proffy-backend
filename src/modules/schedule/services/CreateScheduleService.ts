import { inject, injectable } from 'tsyringe';
import Schedule from '../infra/typeorm/entities/Schedule';
import IScheduleRepository from '../repositories/IScheduleRepository';

interface Request {
  week_day: number;
  from: number;
  to: number;
}

@injectable()
class CreateScheduleService {
  constructor(
    @inject('ScheduleRepository')
    private scheduleRepository: IScheduleRepository,
  ) {}

  public async execute({ week_day, from, to }: Request): Promise<Schedule> {
    const classe = await this.scheduleRepository.create({
      week_day,
      from,
      to,
    });

    return classe;
  }
}

export default CreateScheduleService;
