import { AccountRepository } from '../domain/repositories';
import { LoginUserRequest } from '../domain/entities';

function loginUser(repository: AccountRepository) {
  return async (request: LoginUserRequest) => {
    return await repository.login(request);
  };
}

export default loginUser;
