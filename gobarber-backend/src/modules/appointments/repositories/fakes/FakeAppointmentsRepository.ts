import { uuid } from 'uuidv4';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppoitmentDTO from '@modules/appointments/dtos/ICreateAppoitmentDTO';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appoitments: Appointment[] = [];

  public async create({
    provider_id,
    date,
  }: ICreateAppoitmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), provider_id, date });

    this.appoitments.push(appointment);

    return appointment;
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppoitment = this.appoitments.find(
      appointment => appointment.date === date,
    );

    return findAppoitment;
  }
}

export default FakeAppointmentsRepository;
