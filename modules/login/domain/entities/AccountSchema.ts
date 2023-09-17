import { z } from 'zod';

import { implementModel } from '@/modules/shared/domain/utils';

import Account from './Account';

interface IAccountSchema extends Account {}

const AccountSchema = implementModel<IAccountSchema>().with({
  username: z.string().email(),
  password: z.string().min(8),
});

export default AccountSchema;
