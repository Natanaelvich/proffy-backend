import { inject, injectable } from 'tsyringe';
import Classe from '../infra/typeorm/entities/Classe';
import IClassesRepository from '../repositories/IClassesRepository';

interface Request {
  user_id: string;
  subject: string;
  cost: number;
}

@injectable()
class CreateAppointmentsService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute({ user_id, subject, cost }: Request): Promise<Classe> {
    const appointment = await this.classesRepository.create({
      subject,
      cost,
      user_id,
    });

    return appointment;
  }
}

export default CreateAppointmentsService;
