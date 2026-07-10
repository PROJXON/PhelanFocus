'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about" className="pt-20 md:pt-28 pb-20 bg-white text-gray-800 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-14 items-center">
          {/* Image */}
          <div className="relative mx-auto md:mx-0 w-full max-w-sm">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-[var(--gold)]/15" />
            <Image
              src="/phelan-mark-77.jpg"
              width={420}
              height={420}
              alt="Mark Phelan"
              className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <span className="block text-[var(--gold)] font-semibold uppercase tracking-wide text-sm mb-3">
              About Mark
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">{"Hi, I'm Mark."}</h2>
            <p className="text-lg text-[var(--slateBlue)] font-medium mb-4 leading-relaxed">
              I believe that each of us has the potential to create the change we want to see in the
              world. But too often we get stuck feeling like we can’t. I want to change that.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              The world needs people like you. People gifted with compassion and a desire to make a
              difference. People who see a problem and look for a solution.
            </p>
            <p className="mb-8 text-gray-600 leading-relaxed">
              And you need people like me. Someone who’ll not only help you find the confidence to
              step up and make that difference, but also support you as you create a life you love.
            </p>

            <a
              href="https://www.linkedin.com/in/phelanmarkw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border-2 border-[var(--slateBlue)] px-5 py-2.5 font-semibold text-[var(--slateBlue)] transition-colors hover:bg-[var(--slateBlue)] hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
