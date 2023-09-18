import { Box, Select, Stack, Text } from '@chakra-ui/react';

import { AvailableTimeOption, UpcomingDateForm } from '..';
import { IBookAppointmentSectionProps } from './BookAppointmentSection.types';

function BookAppointmentSection(props: IBookAppointmentSectionProps) {
  const { data, error, isError, isLoading, handleSubmit } = props;

  const getAvailableTimesPlaceholder = () => {
    if (isError) {
      return error || 'Something went wrong';
    }

    if (isLoading) {
      return 'Loading...';
    }

    if (!data || data.length === 0) {
      return 'No available times';
    }

    return 'Select a time';
  };

  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <Stack spacing="16">
      <Box w="full" maxW={350} margin="0 auto">
        <UpcomingDateForm
          initialValues={{
            appointmentDate: getTomorrow(),
          }}
          isSubmitting={isLoading}
          onSubmit={handleSubmit}
        />
      </Box>
      <Box>
        <Text textStyle="subtitle2">Select a time</Text>
        <Select variant="outline" placeholder={getAvailableTimesPlaceholder()}>
          {data?.map(({ date }) => {
            return <AvailableTimeOption key={date} time={date} />;
          })}
        </Select>
      </Box>
    </Stack>
  );
}

export default BookAppointmentSection;
