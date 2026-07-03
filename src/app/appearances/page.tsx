import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollToTopButton from '@/components/ScrollToTop';

export default function Page() {
  return (
    <div className="appearances-page">
      <Navbar />

      {/* Hero Section*/}
      <Hero bgImage="/consult.jpg" header="Stay Tuned!" objectPosition="center 30%" />
      <main className="appearances-main"></main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
