import { AppointmentFetcher } from '@/modules/dashboard/domain/fetchers';
import { AppointmentRepository } from '@/modules/dashboard/domain/repositories';

export interface IBookAppointmentContainerProps {
  repository: AppointmentRepository;
  fetcher: AppointmentFetcher;
  authToken: string;
}
