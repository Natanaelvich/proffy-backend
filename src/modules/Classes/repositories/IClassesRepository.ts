import ICreateClasseDTO from '../dtos/ICreateClasseDTO';
import Classe from '../infra/typeorm/entities/Classe';

export default interface IClassesRepository {
  create(data: ICreateClasseDTO): Promise<Classe>;
}
