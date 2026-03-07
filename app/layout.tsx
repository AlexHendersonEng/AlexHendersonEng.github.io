import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alex Henderson',
  description: 'Alex Henderson personal website',
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
