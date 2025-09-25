import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollToTopButton from '@/components/ScrollToTop';

export default function Page() {
  return (
    <div className="appearances-page">
      <Navbar />

      {/* Hero Section*/}
      <Hero bgImage="/Consult.png" header="Appearances" />
      <main className="appearances-main">Stay tuned</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
