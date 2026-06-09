import type { Metadata } from 'next';
import { SessionProvider } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'APEX Ontology Editor',
  description: 'Collaborative business planning ontology editor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
