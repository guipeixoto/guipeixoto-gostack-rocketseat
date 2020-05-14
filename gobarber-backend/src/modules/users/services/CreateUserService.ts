import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async run({ name, email, password }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPasword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPasword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
