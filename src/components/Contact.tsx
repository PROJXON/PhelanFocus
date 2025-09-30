import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const ContactFormCard = () => (
  <div className="h-full flex flex-col justify-center bg-[var(--slateBlue)] text-white p-8 rounded-3xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
    <p className="text-lg mb-8 opacity-90 text-center">Send me a message!</p>
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
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Your Path to Success Starts Here
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group border-b border-gray-300 pb-4 cursor-pointer">
            <summary className="text-lg font-semibold text-gray-900 flex justify-between items-center">
              {faq.question}
              <span className="ml-2 text-blue-500 group-open:rotate-180 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
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
