import { LoginUserRequest, LoginUserResponse } from '../entities';

interface AccountRepository {
  login(request: LoginUserRequest): Promise<LoginUserResponse>;
}

export default AccountRepository;
