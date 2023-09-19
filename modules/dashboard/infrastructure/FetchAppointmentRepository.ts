import { FetchError } from '@/modules/shared/domain/errors';
import { Connection } from '@/modules/shared/domain/entities';

import { AppointmentRepository } from '../domain/repositories';
import {
  AppointmentAvailabilityRequest,
  AppointmentAvailability,
  Appointment,
  ExistingAppointmentsRequest,
} from '../domain/entities';

class FetchAppointmentRepository implements AppointmentRepository {
  private static instance: FetchAppointmentRepository;

  private constructor() {}

  public static getInstance(): FetchAppointmentRepository {
    if (!FetchAppointmentRepository.instance) {
      FetchAppointmentRepository.instance = new FetchAppointmentRepository();
    }

    return FetchAppointmentRepository.instance;
  }

  public async getAvailableDates(
    request: AppointmentAvailabilityRequest,
  ): Promise<AppointmentAvailability[]> {
    const { appointmentDate, token } = request;

    const response = await fetch(`/api/availability/${appointmentDate}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if ('message' in response) {
      throw new FetchError(response.message, response.status);
    }

    if (response instanceof Array === false) {
      throw new FetchError('Failed to fetch available dates', 400);
    }

    return (response as string[]).map((date) => ({ date }));
  }

  public async getExistingAppointments(
    request: ExistingAppointmentsRequest,
  ): Promise<Connection<Appointment>> {
    const { size, after, before, token } = request;

    const afterQuery = after ? `&after=${after}` : '';
    const beforeQuery = before ? `&before=${before}` : '';

    const response = await fetch(
      `/api/appointments?size=${size}${afterQuery}${beforeQuery}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then((res) => res.json());

    if ('message' in response) {
      throw new FetchError(response.message, response.status);
    }

    if (!response) {
      throw new FetchError('Failed to fetch existing appointments', 400);
    }

    return response as Connection<Appointment>;
  }
}

export default FetchAppointmentRepository;
