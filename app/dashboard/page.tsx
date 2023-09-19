'use client';

import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/navigation';

import { DashboardContainer } from '@/features/dashboard/containers';
import {
  FetchAppointmentRepository,
  ReactQueryAppointmentFetcher,
} from '@/modules/dashboard/infrastructure';

function DashboardPage() {
  const appointmentRepository = FetchAppointmentRepository.getInstance();
  const appointmentFetcher = ReactQueryAppointmentFetcher.getInstance();

  const queryClient = useQueryClient();
  const authToken = queryClient.getQueryData('authToken');
  const router = useRouter();

  useEffect(() => {
    if (!authToken) {
      router.push('/login');
    }
  }, [authToken]);

  return (
    <DashboardContainer
      repository={appointmentRepository}
      fetcher={appointmentFetcher}
      authToken={authToken as string}
    />
  );
}

export default DashboardPage;
