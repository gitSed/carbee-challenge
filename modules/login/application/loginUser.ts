import { AccountRepository } from '../domain/repositories';
import { LoginUserRequest } from '../domain/entities';

function login(repository: AccountRepository) {
  return async (request: LoginUserRequest) => {
    return await repository.login(request);
  };
}

export default login;
