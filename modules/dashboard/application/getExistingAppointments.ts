import { ExistingAppointmentsRequest } from '../domain/entities';
import { AppointmentRepository } from '../domain/repositories';

function getExistingAppointments(
  repository: AppointmentRepository,
  request: ExistingAppointmentsRequest,
) {
  return async () => await repository.getExistingAppointments(request);
}

export default getExistingAppointments;
