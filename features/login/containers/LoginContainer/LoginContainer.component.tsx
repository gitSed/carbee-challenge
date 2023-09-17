'use client';

import NextImage from 'next/image';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';

import { LoginForm } from '@/features/login/components';
import { Account, LoginUserRequest } from '@/modules/login/domain/entities';
import { loginUser } from '@/modules/login/application';

import { ILoginContainerProps } from './LoginContainer.types';

const ImagePlaceholderUrl =
  'https://res.cloudinary.com/dtdygo8fv/image/upload/v1694909480/carbee/c6a7etgwtvqpcpkyvou0.png';

function LoginContainer(props: ILoginContainerProps) {
  const { repository, fetcher } = props;

  const { error, isError, isLoading, isSuccess, data, mutate } =
    fetcher.loginMutation(loginUser(repository));

  const handleSubmit = (formValues: Account) => {
    const request: LoginUserRequest = {
      password: formValues.password,
      username: formValues.username,
    };

    mutate(request);
  };

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
