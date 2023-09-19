import { useQuery } from 'react-query';

import { Connection } from '@/modules/shared/domain/entities';

import { Appointment, AppointmentAvailability } from '../domain/entities';
import { AppointmentFetcher } from '../domain/fetchers';

function useGetAvailableDatesQuery(
  queryFn: () => Promise<AppointmentAvailability[]>,
  options: { enabled?: boolean; queryKey: Record<string, unknown> },
) {
  const { data, error, isError, isLoading, isSuccess } = useQuery<
    AppointmentAvailability[]
  >(['get-available-dates-query', options.queryKey], queryFn, {
    staleTime: 1500,
    enabled: options?.enabled ?? false,
  });

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
  };
}

function useGetExistingAppointments(
  queryFn: () => Promise<Connection<Appointment>>,
  options: { enabled?: boolean; queryKey: Record<string, unknown> },
) {
  const { data, error, isError, isLoading, isSuccess } = useQuery<
    Connection<Appointment>
  >(['get-existing-appointments-query', options.queryKey], queryFn, {
    staleTime: 1500,
    enabled: options?.enabled ?? false,
  });

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
  };
}

class ReactQueryAppointmentFetcher implements AppointmentFetcher {
  private static instance: ReactQueryAppointmentFetcher;

  private constructor() {}

  public static getInstance(): ReactQueryAppointmentFetcher {
    if (!ReactQueryAppointmentFetcher.instance) {
      ReactQueryAppointmentFetcher.instance =
        new ReactQueryAppointmentFetcher();
    }

    return ReactQueryAppointmentFetcher.instance;
  }

  public readonly getAvailableDatesQuery = useGetAvailableDatesQuery;
  public readonly getExistingAppointmentsQuery = useGetExistingAppointments;
}

export default ReactQueryAppointmentFetcher;
