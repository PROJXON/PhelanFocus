import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollToTopButton from '@/components/ScrollToTop';

export default function Page() {
  return (
    <div className="appearances-page bg-white">
      <Navbar />

      {/* Hero Section*/}
      <Hero bgImage="/consult.jpg" header="Stay Tuned!" objectPosition="center 30%" />
      <main className="appearances-main min-h-[30vh]"></main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
