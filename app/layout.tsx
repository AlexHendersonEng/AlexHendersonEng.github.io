import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexhendersoneng.github.io'),
  title: 'Alex Henderson | Aerospace Software Engineer',
  description:
    'Alex Henderson is an aerospace software engineer exploring modelling, simulation, control and machine learning.',
  openGraph: {
    title: 'Alex Henderson | Aerospace Software Engineer',
    description:
      'Exploring modelling, simulation, control and machine learning in aerospace engineering.',
    url: '/',
    siteName: 'Alex Henderson',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Alex Henderson | Aerospace Software Engineer',
    description:
      'Exploring modelling, simulation, control and machine learning in aerospace engineering.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
