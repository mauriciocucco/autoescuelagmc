'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Instructor } from '@/components/instructor';
import { PaymentMethods } from '@/components/payment-methods';
import { GiftCardSection } from '@/components/gift-card-section';
import { ContactForm } from '@/components/contact-form';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { GiftCardModal } from "@/components/gift-card-modal";
import { Footer } from '@/components/footer';
import { HotSaleBanner } from '@/components/hot-sale-banner';
import { CertificateSection } from '@/components/certificate';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return (
    <div className='flex min-h-screen flex-col'>
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
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
