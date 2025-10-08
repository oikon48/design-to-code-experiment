import type { Metadata } from 'next';
import { Poppins, Work_Sans, Public_Sans } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins'
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans'
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-public-sans'
});

export const metadata: Metadata = {
  title: 'Brooklyn Gilbert — Portfolio',
  description: 'Portfolio experience for Brooklyn Gilbert, Freelance UI/UX Designer'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${workSans.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
