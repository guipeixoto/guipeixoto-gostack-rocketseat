import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const showProfileService = container.resolve(ShowProfileService);
    const user = await showProfileService.run({ user_id });

    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, old_password, password } = request.body;
    const user_id = request.user.id;

    const updateProfileService = container.resolve(UpdateProfileService);

    const userUpdated = await updateProfileService.run({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    delete userUpdated.password;

    return response.json(userUpdated);
  }
}
