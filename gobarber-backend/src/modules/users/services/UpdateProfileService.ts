import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async run({
    user_id,
    name,
    email,
    oldPassword,
    password,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const userEmailExisting = await this.usersRepository.findByEmail(email);

    if (userEmailExisting && userEmailExisting.id !== user_id) {
      throw new AppError('E-mail already in use.');
    }

    if (password && !oldPassword) {
      throw new AppError(
        'You need to inform the old password to set a new password.',
      );
    }

    if (password && oldPassword) {
      const checkOldPassword = await this.hashProvider.compareHash(
        oldPassword,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match current password.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    user.name = name;
    user.email = email;

    return this.usersRepository.save(user);
  }
}
