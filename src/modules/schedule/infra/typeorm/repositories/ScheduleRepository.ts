import ICreateScheduleDTO from '@modules/schedule/dtos/ICreateScheduleDTO';
import IScheduleRepository from '@modules/schedule/repositories/IScheduleRepository';
import { getRepository, Repository } from 'typeorm';
import Schedule from '../entities/Schedule';

interface IFindAll {
  week_day: number;
  timeInMinutes: number;
  subject: string;
}

class ScheduleRepository implements IScheduleRepository {
  private ormRepository: Repository<Schedule>;

  constructor() {
    this.ormRepository = getRepository(Schedule);
  }

  public async create(data: ICreateScheduleDTO): Promise<Schedule> {
    const schedule = this.ormRepository.create(data);

    await this.ormRepository.save(schedule);

    return schedule;
  }
}

export default ScheduleRepository;
