import { AccountFetcher } from '@/modules/login/domain/fetchers';
import { AccountRepository } from '@/modules/login/domain/repositories';

export interface ILoginContainerProps {
  repository: AccountRepository;
  fetcher: AccountFetcher;
}
