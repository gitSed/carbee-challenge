import { useState } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';

import { BookAppointmentSection } from '@/features/dashboard/components';
import { ExistingAppointmentsContainer } from '@/features/dashboard/containers';
import { UpcomingDate } from '@/modules/dashboard/domain/entities';
import { getAvailableDates } from '@/modules/dashboard/application';

import { IAppointmentContainerProps } from './DashboardContainer.types';

function DashboardContainer(props: IAppointmentContainerProps) {
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
    <Flex
      h="100vh"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="flex-start"
      gap="4rem"
      paddingX={{ base: 4, md: 8, lg: '7rem', xl: '10rem' }}
      paddingTop={{ base: 4, md: 8, lg: '4rem', xl: '5rem' }}
    >
      <Stack
        spacing={6}
        w="30rem"
        maxW="25rem"
        padding="2rem"
        border="1px solid"
        borderColor="gray.200"
      >
        <Text textStyle="h3">Book an Appointment</Text>
        <BookAppointmentSection
          data={data}
          handleSubmit={handleSubmit}
          isError={isError}
          error={error ? (error as any).message : undefined}
          isLoading={isLoading}
        />
      </Stack>
      <Stack
        flex="1 0 50%"
        w="full"
        spacing={6}
        padding="2rem"
        border="1px solid"
        borderColor="gray.200"
        textAlign="center"
      >
        <Text textStyle="h3">Existing Appointments</Text>
        <ExistingAppointmentsContainer
          fetcher={fetcher}
          repository={repository}
          authToken={authToken}
        />
      </Stack>
    </Flex>
  );
}

export default DashboardContainer;
