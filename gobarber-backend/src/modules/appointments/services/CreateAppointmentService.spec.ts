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

  // it('should not be able to create two appointments on the same time', () => {});
});
