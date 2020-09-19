import ICreateClasseDTO from '@modules/classes/dtos/ICreateClasseDTO';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { getRepository, Repository } from 'typeorm';
import Classe from '../entities/Classe';

interface IFindAll {
  week_day: number;
  timeInMinutes: number;
  subject: string;
}

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<Classe>;

  constructor() {
    this.ormRepository = getRepository(Classe);
  }

  public async create(data: ICreateClasseDTO): Promise<Classe> {
    const classe = this.ormRepository.create(data);

    await this.ormRepository.save(classe);

    return classe;
  }

  // public async findAll({
  //   timeInMinutes,
  //   week_day,
  //   subject,
  // }: IFindAll): Promise<Classe[]> {
  //   const classes = await this.ormRepository.find({
  //     subject,
  //   });

  //   console.log(timeInMinutes, week_day, subject);
  //   // .whereExists(function () {
  //   //   this.select('class_shedule.*')
  //   //     .from('class_schedule')
  //   //     .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
  //   //     .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
  //   //     .whereRaw('`class_schedule`.`from` <= ??', [Number(timeInMinutes)])
  //   //     .whereRaw('`class_schedule`.`to` > ??', [Number(timeInMinutes)]);
  //   // })
  //   // .where('classes.subject', '=', subject)
  //   // .join('users', 'classes.user_id', '=', 'users.id')
  //   // .select(['classes.*', 'users.*']);

  //   return classes;
  // }
}

export default ClassesRepository;
