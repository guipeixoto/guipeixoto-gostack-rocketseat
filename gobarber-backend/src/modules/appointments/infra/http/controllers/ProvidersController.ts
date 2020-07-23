import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const listProvidersService = container.resolve(ListProvidersService);
    const providers = await listProvidersService.run({ user_id });

    return response.json(providers);
  }
}