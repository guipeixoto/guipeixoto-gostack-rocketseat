import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'User Test',
      email: 'usertest@mail.com',
      password: await fakeHashProvider.generateHash('123456'),
    });

    const response = await authenticateUserService.run({
      email: 'usertest@mail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await expect(
      authenticateUserService.run({
        email: 'otheruser@mail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      authenticateUserService.run({
        email: 'otheruser@mail.com',
        password: '123456',
      }),
    ).rejects.toEqual(
      new AppError('Incorrect email/password combination.', 401),
    );
  });

  it('should not be able to authenticate with password incorrect', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await fakeUsersRepository.create({
      name: 'User Test',
      email: 'usertest@mail.com',
      password: await fakeHashProvider.generateHash('123456'),
    });

    expect(
      authenticateUserService.run({
        email: 'usertest@mail.com',
        password: 'passworincorrect',
      }),
    ).rejects.toBeInstanceOf(AppError);

    expect(
      authenticateUserService.run({
        email: 'usertest@mail.com',
        password: 'passworincorrect',
      }),
    ).rejects.toEqual(
      new AppError('Incorrect email/password combination', 401),
    );
  });
});
