import { UpcomingDate } from '@/modules/dashboard/domain/entities';

export interface IUpcomingDateFormProps {
  initialValues: UpcomingDate;
  isSubmitting: boolean;
  onSubmit: (values: UpcomingDate) => void;
}

export interface IUpcomingDateFormFields extends UpcomingDate {}
