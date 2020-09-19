import CreateClassesService from '@modules/Classes/services/CreateClassesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createAppointment = container.resolve(CreateClassesService);

    const appointment = await createAppointment.execute({
      name,
    });
    return response.json(appointment);
  }
}
