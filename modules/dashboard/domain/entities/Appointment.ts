import AppointmentStatus from './AppointmentStatus';

interface Appointment {
  id: string;
  paymentId: string;
  userId: string;
  duration: number;
  scheduledTime: string;
  status: AppointmentStatus;
  workOrder: {
    service: string;
  };
}

export default Appointment;
