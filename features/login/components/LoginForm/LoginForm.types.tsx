import { Account } from '@/modules/login/domain/entities';

export interface ILoginFormProps {
  initialValues: Account;
  isSubmitting: boolean;
  isSuccess: boolean;
  onSubmit: (values: Account) => void;
}

export interface ILoginFormFields extends Account {}
