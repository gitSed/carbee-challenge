import { useQuery } from 'react-query';

import { AppointmentAvailability } from '../domain/entities';
import { AppointmentFetcher } from '../domain/fetchers';

function useGetAvailableDatesQuery(
  queryFn: () => Promise<AppointmentAvailability[]>,
  options: { enabled?: boolean; queryKey: Record<string, unknown> },
) {
  const { data, error, isError, isLoading, isSuccess } = useQuery<
    AppointmentAvailability[]
  >(['get-available-dates-query', options.queryKey], queryFn, {
    staleTime: 1500,
    enabled: options?.enabled ?? true,
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
  readonly getAvailableDatesQuery = useGetAvailableDatesQuery;
}

export default ReactQueryAppointmentFetcher;
