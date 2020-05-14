import { startOfHour } from 'date-fns';

import AppError from '@shared/errors/AppError';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import ICreateAppoitmentDTO from '../dtos/ICreateAppoitmentDTO';

import Appointment from '../infra/typeorm/entities/Appointment';

class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  public async run({
    provider_id,
    date,
  }: ICreateAppoitmentDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentsInSemaDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentsInSemaDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
