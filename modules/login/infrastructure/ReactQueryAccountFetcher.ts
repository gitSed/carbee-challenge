import { useMutation } from 'react-query';

import { LoginUserRequest, LoginUserResponse } from '../domain/entities';
import { AccountFetcher } from '../domain/fetchers';

function useLoginMutation(
  mutationFn: (request: LoginUserRequest) => Promise<LoginUserResponse>,
) {
  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation('login-user-mutation', mutationFn);

  return {
    mutate: mutateAsync,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}

class ReactQueryAccountFetcher implements AccountFetcher {
  readonly loginMutation = useLoginMutation;
}

export default ReactQueryAccountFetcher;
