'use client';

import { useEffect } from 'react';
import { Button, Flex, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/features/shared/components';
import { AccountSchema } from '@/modules/login/domain/entities';

import { ILoginFormFields, ILoginFormProps } from './LoginForm.types';

function LoginForm(props: ILoginFormProps) {
  const { initialValues, isSubmitting, isSuccess, onSubmit } = props;

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<ILoginFormFields>({
    resolver: zodResolver(AccountSchema),
    mode: 'onBlur',
    defaultValues: { ...initialValues },
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess]);

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column">
      <VStack gap="1rem">
        <Input
          hiddenLabel
          label="Username"
          name="username"
          control={control}
          placeholder="Username"
          isDisabled={isSubmitting}
        />
        <Input
          hiddenLabel
          label="Password"
          name="password"
          control={control}
          placeholder="Password"
          isDisabled={isSubmitting}
        />
      </VStack>
      <Button
        type="submit"
        marginTop="2rem"
        isDisabled={!isValid}
        isLoading={isSubmitting}
      >
        Login
      </Button>
    </Flex>
  );
}

export default LoginForm;
