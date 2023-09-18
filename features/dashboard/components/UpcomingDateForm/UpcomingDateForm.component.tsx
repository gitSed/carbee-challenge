'use client';

import { Button, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/features/shared/components';
import { UpcomingDateSchema } from '@/modules/dashboard/domain/entities';

import {
  IUpcomingDateFormFields,
  IUpcomingDateFormProps,
} from './UpcomingDateForm.types';

function UpcomingDateForm(props: IUpcomingDateFormProps) {
  const { initialValues, isSubmitting, onSubmit } = props;

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<IUpcomingDateFormFields>({
    resolver: zodResolver(UpcomingDateSchema),
    mode: 'onBlur',
    defaultValues: { ...initialValues },
  });

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column">
      <Input
        hiddenLabel
        type="date"
        label="Appointment Date"
        name="appointmentDate"
        control={control}
        placeholder="Choose a date"
        isDisabled={isSubmitting}
      />
      <Button
        type="submit"
        marginTop="1.5rem"
        isDisabled={!isValid}
        isLoading={isSubmitting}
      >
        Check for Availability
      </Button>
    </Flex>
  );
}

export default UpcomingDateForm;
