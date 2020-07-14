import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';

export default class ProviderAppointmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const createAppointment = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await createAppointment.run({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(appointments);
  }
}
