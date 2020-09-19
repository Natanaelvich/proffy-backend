import CreateClassesService from '@modules/classes/services/CreateClassesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, bio, cost, subject, whatsapp } = request.body;
    const { id: user_id } = request.user;

    const createAppointment = container.resolve(CreateClassesService);

    const appointment = await createAppointment.execute({
      name,
      user_id,
      bio,
      cost,
      subject,
      whatsapp,
    });
    return response.json(appointment);
  }
}
