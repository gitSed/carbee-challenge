import { useState } from 'react';

import { BookAppointmentSection } from '@/features/dashboard/components';
import { UpcomingDate } from '@/modules/dashboard/domain/entities';
import { getAvailableDates } from '@/modules/dashboard/application';

import { IBookAppointmentContainerProps } from './BookAppointmentContainer.types';

function BookAppointmentContainer(props: IBookAppointmentContainerProps) {
  const { repository, fetcher, authToken } = props;

  const [appointmentDate, setAppointmentDate] = useState<string | undefined>();

  const { isError, isLoading, error, data } = fetcher.getAvailableDatesQuery(
    getAvailableDates(repository, {
      appointmentDate: appointmentDate as string,
      token: authToken,
    }),
    {
      enabled: !!appointmentDate && !!authToken,
      queryKey: { appointmentDate },
    },
  );

  const handleSubmit = (formValues: UpcomingDate) => {
    const { appointmentDate } = formValues;

    setAppointmentDate(appointmentDate);
  };

  return (
    <BookAppointmentSection
      data={data}
      handleSubmit={handleSubmit}
      isError={isError}
      error={error ? (error as any).message : undefined}
      isLoading={isLoading}
    />
  );
}

export default BookAppointmentContainer;
