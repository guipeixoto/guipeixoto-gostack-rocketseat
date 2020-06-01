import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.run({
      date: new Date(),
      provider_id: 'a1s2a45d1a',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('a1s2a45d1a');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const date = new Date(2020, 4, 10, 11);

    await createAppointment.run({
      date,
      provider_id: 'a1s2a45d1a',
    });

    await expect(
      createAppointment.run({
        date,
        provider_id: 'a1s2a45d1a',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.run({
        date,
        provider_id: 'a1s2a45d1a',
      }),
    ).rejects.toEqual(new AppError('This appointment is already booked'));
  });
});
