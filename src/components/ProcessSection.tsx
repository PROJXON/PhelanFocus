'use client';
import Link from 'next/link';
import { FaRegClipboard, FaCogs, FaUserTie, FaFlagCheckered } from 'react-icons/fa';
import { ProcessStep } from '@/types/interfaces';

const steps: ProcessStep[] = [
  {
    title: 'Discovery Call',
    icon: FaRegClipboard,
    text: "We start with a conversation about where you are, where you want to go, and what's been holding you back.",
    link: '/services',
    colorClass: 'hover:border-yellow-400',
    tagColor: 'text-yellow-400',
  },
  {
    title: 'Personalized Plan',
    icon: FaCogs,
    text: 'Your coaching plan is built around your specific goals, not a one-size-fits-all program.',
    link: '/services',
    colorClass: 'hover:border-orange-400',
    tagColor: 'text-orange-400',
  },
  {
    title: 'Coaching Sessions',
    icon: FaUserTie,
    text: 'We meet consistently, working through real challenges and building the habits that create lasting change.',
    link: '/services',
    colorClass: 'hover:border-green-400',
    tagColor: 'text-green-400',
  },
  {
    title: 'Growth & Results',
    icon: FaFlagCheckered,
    text: 'You leave with clarity, momentum, and a plan you can keep using long after our work together ends.',
    link: '/services',
    colorClass: 'hover:border-pink-400',
    tagColor: 'text-pink-400',
  },
];

export default function ProcessSection() {
  return (
    <section
      className="bg-[var(--slateBlue)] py-20 md:py-24 px-4 relative mb-24 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url(/pattern-2.png)' }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-white text-4xl font-bold mt-4">How We Work Together</h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-20 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className={`group cursor-pointer bg-[#121c2f] border border-white/10 rounded-xl p-8 text-white text-center transition-all duration-300 ${item.colorClass}`}
              >
                {/* Icon with animation */}
                <div
                  className={`flex justify-center mb-4 transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110 ${item.tagColor}`}
                >
                  <item.icon size={40} />
                </div>

                {/* Step badge */}
                <div
                  className={`text-xs font-semibold tracking-wide bg-gray-800 inline-block px-4 py-1 rounded-full mb-3 uppercase ${item.tagColor}`}
                >
                  STEP {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h4
                  className={`text-lg font-bold mb-2 group-hover:${item.tagColor} transition-colors`}
                >
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm opacity-70">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
