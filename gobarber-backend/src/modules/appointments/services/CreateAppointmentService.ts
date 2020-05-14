import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import ICreateAppoitmentDTO from '../dtos/ICreateAppoitmentDTO';

import Appointment from '../infra/typeorm/entities/Appointment';
import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';

class CreateAppointmentService {
  public async run({
    provider_id,
    date,
  }: ICreateAppoitmentDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentsInSemaDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentsInSemaDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
