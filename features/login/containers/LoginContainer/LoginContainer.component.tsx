'use client';

import NextImage from 'next/image';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';

import { LoginForm } from '@/features/login/components';
import { Account, LoginUserRequest } from '@/modules/login/domain/entities';

import { ILoginContainerProps } from './LoginContainer.types';

const ImagePlaceholderUrl =
  'https://res.cloudinary.com/dtdygo8fv/image/upload/v1694909480/carbee/c6a7etgwtvqpcpkyvou0.png';

function LoginContainer(props: ILoginContainerProps) {
  const { repository } = props;

  const handleSubmit = (formValues: Account) => {
    const request: LoginUserRequest = {
      password: formValues.password,
      username: formValues.username,
    };

    repository.login(request);
  };

  return (
    <Flex
      h="100vh"
      gap={{ base: '1rem', md: '1.5rem', lg: '2.75rem', xl: '3.75rem' }}
    >
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
        <Box paddingRight={{ base: 4, md: 8, lg: '7rem', xl: '10rem' }}>
          <LoginForm
            initialValues={{
              username: '',
              password: '',
            }}
            isSubmitting={false}
            isSuccess={false}
            onSubmit={handleSubmit}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default LoginContainer;
