import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="max-w-xl text-center space-y-4">
          <svg
            className="w-14 h-14 mx-auto text-[var(--gold)]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <h1 className="text-3xl font-bold text-[var(--slateBlue)]">Payment Canceled</h1>
          <p className="text-lg text-gray-600">
            No charge was made. You can try again whenever you're ready, or reach out if you need
            help.
          </p>
          <Link
            href="/sessions"
            className="inline-block mt-4 bg-[var(--gold)] hover:bg-[var(--slateBlue)] hover:text-white text-[var(--slateBlue)] font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Back to Sessions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
