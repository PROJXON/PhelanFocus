import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactFormCard = () => (
  <div className="bg-[var(--slateBlue)] text-white p-8 md:p-10 rounded-3xl shadow-xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
    <p className="text-white/70 mb-8">
      Have a question or ready to get started? Send me a message.
    </p>
    <ContactForm />
  </div>
);

const FaqSection = () => {
  const faqs = [
    {
      question: 'What is life coaching?',
      answer:
        'Life coaching is a collaborative process between a trained professional and an individual aimed at helping the client achieve personal and/or professional goals, overcome obstacles, and maximize their potential.',
    },
    {
      question: 'What can I expect from life coaching sessions?',
      answer:
        'You can expect personalized goal-setting, accountability, and support to help you move forward confidently in your personal or professional life.',
    },
    {
      question: 'How is life coaching different from therapy?',
      answer:
        'Therapy focuses on healing and addressing past trauma. Life coaching focuses on taking action toward goals and future achievements.',
    },
    {
      question: 'Is life coaching confidential?',
      answer: 'Yes, all coaching sessions are private and confidential.',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
        Your Path to Success Starts Here
      </h2>
      <p className="text-gray-500 mb-6">Answers to the questions I hear most often.</p>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-xl border border-gray-200 bg-gray-50 transition-colors open:bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base md:text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <FaChevronDown className="shrink-0 text-[var(--gold)] transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      id="contact"
      className="py-12 px-5 bg-white text-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ContactFormCard />
          <div className="lg:pl-10">
            <FaqSection />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
