import {
  AppointmentAvailability,
  UpcomingDate,
} from '@/modules/dashboard/domain/entities';

export interface IBookAppointmentSectionProps {
  isError: boolean;
  isLoading: boolean;
  data?: AppointmentAvailability[];
  error?: string;
  handleSubmit: (values: UpcomingDate) => void;
}
