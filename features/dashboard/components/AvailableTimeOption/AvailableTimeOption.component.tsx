import { Box } from '@chakra-ui/react';

import { IAvailableTimeCardProps } from './AvailableTimeOption.types';

function AvailableTimeOption(props: IAvailableTimeCardProps) {
  const { time } = props;

  const parseTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const suffix = parseInt(hour) >= 12 ? 'PM' : 'AM';
    const hour12 = parseInt(hour) % 12 || 12;

    return `${hour12}:${minute} ${suffix}`;
  };

  const extractTime = (date: string) => {
    const [_, time] = date.split('T');

    return parseTime(time);
  };

  return (
    <Box as="option" textStyle="paragraph" value={time}>
      {extractTime(time)}
    </Box>
  );
}

export default AvailableTimeOption;
