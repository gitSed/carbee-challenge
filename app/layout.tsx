import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { withStyledSystem } from '@/features/shared/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carbee',
  description: 'Car repair that comes to you',
};

function App({ children }: { children: React.ReactNode }) {
  const AppWithChakraUI = withStyledSystem(
    ({ children }: React.PropsWithChildren) => {
      return <>{children}</>;
    },
    'chakra-ui',
  );

  return <AppWithChakraUI>{children}</AppWithChakraUI>;
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}

export default RootLayout;
