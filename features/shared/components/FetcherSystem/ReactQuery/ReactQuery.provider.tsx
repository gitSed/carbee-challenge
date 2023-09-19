'use client';

import { QueryClientProvider, QueryClient } from 'react-query';

import { IReactQueryProviderProps } from './ReactQuery.types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function ReactQueryProvider(props: IReactQueryProviderProps) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
