import { inject, injectable } from 'tsyringe';
import Classe from '../infra/typeorm/entities/Classe';
import IClassesRepository from '../repositories/IClassesRepository';

interface Request {
  name: string;
}

@injectable()
class CreateAppointmentsService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute({ name }: Request): Promise<Classe> {
    const appointment = await this.classesRepository.create({
      name,
      avatar: 'string',
      whatsapp: 'string',
      bio: 'string',
      subject: 'string',
      cost: 12,
      schedule: 'string',
    });

    return appointment;
  }
}

export default CreateAppointmentsService;
