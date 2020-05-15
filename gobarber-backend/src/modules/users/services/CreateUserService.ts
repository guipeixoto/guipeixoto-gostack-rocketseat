import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async run({ name, email, password }: ICreateUserDTO): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPasword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPasword,
    });

    return user;
  }
}

export default CreateUserService;
