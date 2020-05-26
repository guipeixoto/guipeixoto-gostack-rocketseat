import { compare } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersrepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersrepository);

    const user = await createUserService.run({
      name: 'User Test',
      email: 'usertest@mail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(await compare('123456', user.password)).toBeTruthy();
  });

  it('should not be able to create two users on the same mail', async () => {
    const fakeUsersrepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersrepository);

    await createUserService.run({
      name: 'User Test',
      email: 'usertest@mail.com',
      password: '123456',
    });

    try {
      await createUserService.run({
        name: 'User Test',
        email: 'usertest@mail.com',
        password: '123456',
      });
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error).toEqual(new AppError('Email address already used.'));
    }
  });
});
