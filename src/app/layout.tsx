import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import '@/styles/main.scss';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'YTech - Премиум электроника будущего',
    template: '%s | YTech'
  },
  description: 'Инновационная электроника премиум-класса. Умные гаджеты, аудиотехника и современные технологии.',
  keywords: ['электроника', 'гаджеты', 'аудиотехника', 'премиум', 'технологии', 'умный дом'],
  authors: [{ name: 'YTech' }],
  openGraph: {
    title: 'YTech - Премиум электроника будущего',
    description: 'Инновационная электроника премиум-класса',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YTech - Премиум электроника',
      },
    ],
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
  twitter: {
    card: 'summary_large_image',
    title: 'YTech - Премиум электроника будущего',
    description: 'Инновационная электроника премиум-класса',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A174E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <StructuredData />
      </head>
      <body>
        <Header />
        <main className="layout">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}