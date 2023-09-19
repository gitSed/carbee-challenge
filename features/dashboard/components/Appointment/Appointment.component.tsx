import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
} from '@chakra-ui/react';

import { AppointmentStatus } from '@/modules/dashboard/domain/entities';

import { IAppointmentProps } from './Appointment.types';

function Appointment(props: IAppointmentProps) {
  const { duration, service, startTime, status } = props;

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
  };

  const formatTime = (date: string) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(date));
  };

  const getBadgeScheme = (status: AppointmentStatus) => {
    switch (status) {
      case 'COMPLETE':
        return 'green';
      case 'IN_PROGRESS':
        return 'purple';
      case 'PAID':
        return 'linkedin';
      case 'SCHEDULED':
        return 'yellow';
      default:
        return '';
    }
  };

  const calculateCompleteTime = () => {
    const date = new Date(startTime);
    const completeTime = date.setMinutes(date.getMinutes() + duration);

    return formatTime(new Date(completeTime).toISOString());
  };

  const renderCompletTimeLine = () => {
    return (
      <Flex alignItems="center" gap="0.75rem">
        <Text textStyle="subtitle2" fontWeight="700">
          Complete Time:
        </Text>
        <Text textStyle="paragraph">{calculateCompleteTime(startTime)}</Text>
      </Flex>
    );
  };

  return (
    <Card border="1px solid" borderColor="gray.100" minW="80" maxW="80">
      <CardHeader>
        <Flex justifyContent="space-between" gap="1.75rem">
          <Box>
            <Text textStyle="subtitle1">{formatDate(startTime)}</Text>
          </Box>
          <Box>
            <Badge colorScheme={getBadgeScheme(status as AppointmentStatus)}>
              {status}
            </Badge>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex alignItems="center" gap="0.75rem">
          <Text textStyle="subtitle2" fontWeight="700">
            Service:
          </Text>
          <Text textStyle="paragraph">{service}</Text>
        </Flex>
        <Flex alignItems="center" gap="0.75rem">
          <Text textStyle="subtitle2" fontWeight="700">
            Duration:
          </Text>
          <Text textStyle="paragraph">{duration} minutes</Text>
        </Flex>
        <Flex alignItems="center" gap="0.75rem">
          <Text textStyle="subtitle2" fontWeight="700">
            Start Time:
          </Text>
          <Text textStyle="paragraph">{formatTime(startTime)}</Text>
        </Flex>
        {status === 'COMPLETE' && renderCompletTimeLine()}
      </CardBody>
    </Card>
  );
}

export default Appointment;
