import './global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from './og/theme'; 

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jody Tng',
    template: '%s | Jody Tng Portfolio',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased flex flex-col min-h-screen overflow-auto">
        <ThemeProvider>
          <main className="flex flex-col flex-grow px-2 md:px-2">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
              {children}
            </div>
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
