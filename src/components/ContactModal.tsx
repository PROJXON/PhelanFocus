'use client';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';
import { useContactModal } from '@/context/ContactModalContext';

const ContactModal = () => {
  const { open, closeModal } = useContactModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[var(--slateBlue)] text-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-yellow-400"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg mb-8 opacity-90 text-center">Send me a message!</p>
            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
