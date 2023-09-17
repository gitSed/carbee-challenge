import { FetchError } from '@/modules/shared/domain/errors';

import { AccountRepository } from '../domain/repositories';
import { LoginUserRequest, LoginUserResponse } from '../domain/entities';

class FetchAccountRepository implements AccountRepository {
  async login(request: LoginUserRequest) {
    const response = await fetch(`/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new FetchError('Invalid credentials', response.status);
    }

    return (await response.json()) as LoginUserResponse;
  }
}

export default FetchAccountRepository;
