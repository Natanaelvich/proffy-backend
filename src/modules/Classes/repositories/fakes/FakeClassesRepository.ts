import ICreateClasseDTO from '@modules/Classes/dtos/ICreateClasseDTO';
import Classe from '@modules/Classes/infra/typeorm/entities/Classe';
import IClassesRepository from '@modules/Classes/repositories/IClassesRepository';
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
