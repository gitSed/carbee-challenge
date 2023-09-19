import { Connection } from '@/modules/shared/domain/entities';

import {
  AppointmentAvailabilityRequest,
  AppointmentAvailability,
  ExistingAppointmentsRequest,
  Appointment,
} from '../entities';

interface AppointmentRepository {
  getAvailableDates(
    request: AppointmentAvailabilityRequest,
  ): Promise<AppointmentAvailability[]>;

  getExistingAppointments(
    request: ExistingAppointmentsRequest,
  ): Promise<Connection<Appointment>>;
}

export default AppointmentRepository;
