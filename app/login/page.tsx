'use client';

import { LoginContainer } from '@/features/login/containers';
import {
  FetchAccountRepository,
  ReactQueryAccountFetcher,
} from '@/modules/login/infrastructure';

function LoginPage() {
  const accountRepository = new FetchAccountRepository();
  const accountFetcher = new ReactQueryAccountFetcher();

  return (
    <LoginContainer repository={accountRepository} fetcher={accountFetcher} />
  );
}

export default LoginPage;
