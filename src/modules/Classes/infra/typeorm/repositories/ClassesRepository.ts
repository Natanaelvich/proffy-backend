import ICreateClasseDTO from '@modules/Classes/dtos/ICreateClasseDTO';
import IClassesRepository from '@modules/Classes/repositories/IClassesRepository';
import { getRepository, Repository } from 'typeorm';
import Classe from '../entities/Classe';

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
}

export default ClassesRepository;
