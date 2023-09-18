import { AppointmentAvailability } from '../entities';

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
}

export default AppointmentFetcher;
