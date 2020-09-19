import ICreateClasseDTO from '@modules/classes/dtos/ICreateClasseDTO';
import Classe from '@modules/classes/infra/typeorm/entities/Classe';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { getRepository, Repository } from 'typeorm';

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
