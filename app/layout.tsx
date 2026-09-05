import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const title = 'MonoonAI — Software & Systems Engineering';
const description =
  'Software for understanding complex systems. MonoonAI develops sensor fusion, controls, simulation, and visualization tools, grounded in automotive and embedded engineering.';
export const metadata: Metadata = {
  title,
  description,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` },
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
