import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersepository,
      fakeMailProvider,
    );

    await fakeUsersepository.create({
      name: 'User Test',
      email: 'usertest@mail.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.run({
      email: 'usertest@mail.com',
    });

    expect(sendMail).toBeCalled();
  });
});
