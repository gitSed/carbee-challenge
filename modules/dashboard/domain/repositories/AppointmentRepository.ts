import {
  AppointmentAvailabilityRequest,
  AppointmentAvailability,
} from '../entities';

interface AppointmentRepository {
  getAvailableDates(
    request: AppointmentAvailabilityRequest,
  ): Promise<AppointmentAvailability[]>;
}

export default AppointmentRepository;
