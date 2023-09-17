'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import { AspectRatio, Box, Flex, ToastId, useToast } from '@chakra-ui/react';

import { LoginForm } from '@/features/login/components';
import { Alert } from '@/features/shared/components';
import { Account, LoginUserRequest } from '@/modules/login/domain/entities';
import { loginUser } from '@/modules/login/application';
import { FetchError } from '@/modules/shared/domain/errors';

import { ILoginContainerProps } from './LoginContainer.types';

const toastDuration = 40000;
const ImagePlaceholderUrl =
  'https://res.cloudinary.com/dtdygo8fv/image/upload/v1694909480/carbee/c6a7etgwtvqpcpkyvou0.png';

function LoginContainer(props: ILoginContainerProps) {
  const { repository, fetcher } = props;

  const router = useRouter();
  const toastIdRef = useRef<ToastId>();

  const toast = useToast({
    position: 'bottom',
    duration: toastDuration,
  });

  const { error, isError, isLoading, isSuccess, data, mutate } =
    fetcher.loginMutation(loginUser(repository));

  const closeToast = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toastIdRef, toast]);

  const showToast = useCallback(
    (status: 'info' | 'warning' | 'success', message: string) => {
      toastIdRef.current = toast({
        render: () => {
          return (
            <Alert message={message} status={status} onDismiss={closeToast} />
          );
        },
      });
    },
    [toastIdRef, toast],
  );

  const handleSubmit = (formValues: Account) => {
    const request: LoginUserRequest = {
      password: formValues.password,
      username: formValues.username,
    };

    mutate(request);
  };

  useEffect(() => {
    if (isError) {
      if (error instanceof FetchError) {
        showToast('warning', error.message);
      } else {
        showToast('warning', 'Something went wrong');
      }
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      router.push('/dashboard');
    }
  }, [isSuccess]);

  return (
    <Flex h="100vh" flexDirection={{ base: 'column', md: 'row' }}>
      <Flex flex="1 1 50%">
        <AspectRatio w="full" ratio={1}>
          <NextImage
            src={ImagePlaceholderUrl}
            alt="Carbee Repair"
            width={500}
            height={500}
          />
        </AspectRatio>
      </Flex>
      <Flex flex="1 1 50%">
        <Box
          w="full"
          maxW={700}
          margin="0 auto"
          paddingX={{ base: 4, md: 8, lg: '4rem', xl: '7rem' }}
          paddingTop={{ base: 4, md: 8, lg: '7rem', xl: '10rem' }}
        >
          <LoginForm
            initialValues={{
              username: '',
              password: '',
            }}
            isSubmitting={isLoading}
            isSuccess={isSuccess}
            onSubmit={handleSubmit}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default LoginContainer;
