import ICreateScheduleDTO from '../dtos/ICreateScheduleDTO';
import Schedule from '../infra/typeorm/entities/Schedule';

export default interface IScheduleRepository {
  create(data: ICreateScheduleDTO): Promise<Schedule>;
}
