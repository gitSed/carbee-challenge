import { AppointmentAvailabilityRequest } from '../domain/entities';
import { AppointmentRepository } from '../domain/repositories';

function getAvailableDates(
  repository: AppointmentRepository,
  request: AppointmentAvailabilityRequest,
) {
  return async () => await repository.getAvailableDates(request);
}

export default getAvailableDates;
