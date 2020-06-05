import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequestDTO {
  user_id: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async run({ user_id }: IRequestDTO): Promise<User[]> {
    const providers = this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    return providers;
  }
}
