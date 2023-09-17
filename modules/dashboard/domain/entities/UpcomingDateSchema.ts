import { z } from 'zod';

import { implementModel } from '@/modules/shared/domain/utils';

import UpcomingDate from './UpcomingDate';

interface IUpcomingDateSchema extends UpcomingDate {}

const UpcomingDateSchema = implementModel<IUpcomingDateSchema>().with({
  appointmentDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
});

export default UpcomingDateSchema;
