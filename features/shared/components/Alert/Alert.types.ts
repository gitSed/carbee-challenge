export interface IAlertProps {
  duration?: number;
  message: string | null;
  status: "info" | "warning" | "success";
  onDismiss?: () => void;
}
