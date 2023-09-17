import { UseControllerProps } from 'react-hook-form';

export type IBaseInputProps = UseControllerProps<any> & {
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
  helperText?: string;
  showError?: boolean;
  hiddenLabel?: boolean;
};
