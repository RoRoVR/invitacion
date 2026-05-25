import type { Metadata } from 'next';
import './globals.css';
import { Cormorant_Garamond, Montserrat, Great_Vibes } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Marcos & Cintia',
  description: 'Wedding Invitation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}