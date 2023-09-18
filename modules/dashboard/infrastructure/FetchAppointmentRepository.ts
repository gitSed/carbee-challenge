import { FetchError } from '@/modules/shared/domain/errors';

import { AppointmentRepository } from '../domain/repositories';
import {
  AppointmentAvailabilityRequest,
  AppointmentAvailability,
} from '../domain/entities';

class FetchAppointmentRepository implements AppointmentRepository {
  async getAvailableDates(
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
}

export default FetchAppointmentRepository;
