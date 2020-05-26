import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersrepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUsersrepository,
      fakeHashProvider,
    );

    const user = await createUserService.run({
      name: 'User Test',
      email: 'usertest@mail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.password === '123456').toBeTruthy();
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersrepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUsersrepository,
      fakeHashProvider,
    );

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
