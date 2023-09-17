import { LoginUserRequest, LoginUserResponse } from '../entities';

interface AccountFetcher {
  readonly loginMutation: (
    mutationFn: (request: LoginUserRequest) => Promise<LoginUserResponse>,
  ) => {
    mutate: (request: LoginUserRequest) => Promise<LoginUserResponse>;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
    data: LoginUserResponse | undefined;
  };
}

export default AccountFetcher;
