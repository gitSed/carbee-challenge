import { Connection } from '@/modules/shared/domain/entities';

import { Appointment, AppointmentAvailability } from '../entities';

interface AppointmentFetcher {
  readonly getAvailableDatesQuery: (
    queryFn: () => Promise<AppointmentAvailability[]>,
    options: { enabled?: boolean; queryKey: Record<string, unknown> },
  ) => {
    data?: AppointmentAvailability[];
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
  };

  readonly getExistingAppointmentsQuery: (
    queryFn: () => Promise<Connection<Appointment>>,
    options: { enabled?: boolean; queryKey: Record<string, unknown> },
  ) => {
    data?: Connection<Appointment>;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
  };
}

export default AppointmentFetcher;
