import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Welcome | ELEVATE',
    template: '%s | ELEVATE',
  },
  description: 'Elevate Exam App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${poppins.className} bg-my-grey-50 text-my-grey-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
