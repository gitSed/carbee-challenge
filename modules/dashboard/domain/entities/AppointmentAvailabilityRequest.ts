import { ProtectedRequest } from '@/modules/shared/domain/entities';

interface AppointmentAvailabilityRequest extends ProtectedRequest {
  appointmentDate: string;
}

export default AppointmentAvailabilityRequest;
