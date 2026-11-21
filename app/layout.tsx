import type React from 'react';
import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@/components/google-analytics';
import { GoogleTagManager } from '@/components/google-tag-manager';
import { ThemeProvider } from '@/components/theme-provider';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_ID;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f4c81',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://autoescuelagmc.com'),
  title: {
    default: 'Autoescuela GMC | Clases de Manejo en Villa Gesell, Pinamar y Partido de la Costa',
    template: '%s | Autoescuela GMC',
  },
  description:
    'Autoescuela GMC ofrece clases de manejo personalizadas en Villa Gesell, Pinamar y Partido de la Costa, incluyendo Mar de Ajó, San Bernardo y La Lucila del Mar.',
  keywords: [
    'autoescuela GMC',
    'autoescuela en Villa Gesell',
    'autoescuela en Pinamar',
    'clases de manejo en Partido de la Costa',
    'clases de manejo en Mar de Ajó',
    'clases de manejo en San Bernardo',
    'clases de manejo en La Lucila del Mar',
    'clases de manejo',
    'curso de manejo',
    'licencia de conducir',
    'practica de manejo',
  ],
  applicationName: 'Autoescuela GMC',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Autoescuela GMC | Clases de Manejo en Villa Gesell, Pinamar y Partido de la Costa',
    url: '/',
    type: 'website',
    description:
      'Clases de manejo personalizadas en Villa Gesell, Pinamar y Partido de la Costa, con servicio en Mar de Ajó, San Bernardo y La Lucila del Mar.',
    siteName: 'Autoescuela GMC',
    locale: 'es_AR',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoescuela GMC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoescuela GMC | Clases de Manejo en Villa Gesell, Pinamar y Partido de la Costa',
    description:
      'Aprendé a conducir con clases personalizadas, instructores certificados y acompañamiento para tu licencia en la costa.',
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className}>
        {gtmContainerId ? (
          <GoogleTagManager containerId={gtmContainerId} />
        ) : null}
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
        {!gtmContainerId && gaMeasurementId ? (
          <GoogleAnalytics measurementId={gaMeasurementId} />
        ) : null}
      </body>
    </html>
  );
}
