'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import '../sessions/sessions.css';

export default function ThankYou() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <Hero bgImage="/sessions/thank-you.jpeg" header="Thank You" />

      {/* Message Section */}
      <main className="flex-grow flex justify-center items-center px-4 py-12">
        <div className="max-w-xl text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#0b1727]">🎉 Payment Successful!</h2>
          <p className="text-lg text-gray-700">
            Thank you for booking your session. We look forward to seeing you!
          </p>
          <p className="text-lg text-gray-700">
            We will send you the meeting link and calendar invite shortly.
          </p>
          <p className="text-lg text-gray-700">
            If you have any questions, feel free to contact us at{' '}
            <a href="mailto:ThePhelanFocus@gmail.com" className="text-blue-600 underline">
              ThePhelanFocus@gmail.com
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
