'use client';

import { LoginContainer } from '@/features/login/containers';
import { FetchAccountRepository } from '@/modules/login/infrastructure';

function LoginPage() {
  const accountRepository = new FetchAccountRepository();

  return <LoginContainer repository={accountRepository} />;
}

export default LoginPage;
