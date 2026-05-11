import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Instructor } from '@/components/instructor';
import { PaymentMethods } from '@/components/payment-methods';
import { GiftCardSection } from '@/components/gift-card-section';
import { ContactForm } from '@/components/contact-form';
import { GiftCardModal } from '@/components/gift-card-modal';
import { Footer } from '@/components/footer';
import { HotSaleBanner } from '@/components/hot-sale-banner';
import { CertificateSection } from '@/components/certificate';

export const metadata: Metadata = {
  title: 'Clases de Manejo en Villa Gesell',
  description:
    'Aprendé a conducir con Autoescuela GMC en Villa Gesell. Clases personalizadas, instructores certificados y preparación para la licencia.',
  alternates: {
    canonical: '/',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  '@id': 'https://autoescuelagmc.com/#organization',
  name: 'Autoescuela GMC',
  image: 'https://autoescuelagmc.com/images/logo.jpg',
  url: 'https://autoescuelagmc.com',
  telephone: '+54-2255-627189',
  email: 'autoescuelagmc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Paseo 117 n° 354',
    addressLocality: 'Villa Gesell',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  areaServed: {
    '@type': 'City',
    name: 'Villa Gesell',
  },
  sameAs: [
    'https://www.facebook.com/p/Autoescuela-GMC-100092333736848/',
    'https://www.instagram.com/clasesdemanejo_gmc/',
  ],
};

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Navbar />
      <HotSaleBanner />
      <main className='flex-1'>
        <Hero />
        <GiftCardModal />
        <Features />
        <Testimonials />
        <Instructor />
        <CertificateSection />
        <PaymentMethods />
        <GiftCardSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
