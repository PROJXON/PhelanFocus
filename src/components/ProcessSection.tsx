'use client';
import Link from 'next/link';
import { FaRegClipboard, FaCogs, FaUserTie, FaFlagCheckered, } from 'react-icons/fa';
import { ProcessStep } from "@/types/interfaces";

const steps: ProcessStep[] = [
  {
    title: 'Plan For Work',
    icon: FaRegClipboard,
    text: 'We begin by understanding your speaking goals, audience, and brand voice to lay the foundation for a powerful online presence.',
    link: '/services',
    colorClass: 'hover:border-yellow-400',
    tagColor: 'text-yellow-400',
  },
  {
    title: 'Implementation',
    icon: FaCogs,
    text: 'From homepage to booking form, we design and develop every element with your personal brand and audience engagement in mind.',
    link: '/services',
    colorClass: 'hover:border-orange-400',
    tagColor: 'text-orange-400',
  },
  {
    title: 'Consultancy',
    icon: FaUserTie,
    text: 'We guide you on best practices—like building your mailing list, integrating videos, and showcasing testimonials to boost authority.',
    link: '/services',
    colorClass: 'hover:border-green-400',
    tagColor: 'text-green-400',
  },
  {
    title: 'Project Closure',
    icon: FaFlagCheckered,
    text: 'After final testing and launch, we hand off a polished, responsive site you can confidently use to land gigs and grow your reach.',
    link: '/services',
    colorClass: 'hover:border-pink-400',
    tagColor: 'text-pink-400',
  },
]

export default function ProcessSection() {
  return (
    <section
      className="bg-[var(--slateBlue)] py-20 md:py-24 px-4 relative mb-24 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url(/pattern-2.png)', }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-white text-4xl font-bold mt-4">Our Solution Process</h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className={`group cursor-pointer bg-[#121c2f] border border-white/10 rounded-xl p-8 text-white text-center transition-all duration-300 ${item.colorClass}`}
              >
                {/* Icon with animation */}
                <div className={`flex justify-center mb-4 transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110 ${item.tagColor}`}>
                  <item.icon size={40} />
                </div>

                {/* Step badge */}
                <div className={`text-xs font-semibold tracking-wide bg-gray-800 inline-block px-4 py-1 rounded-full mb-3 uppercase ${item.tagColor}`}>
                  STEP {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h4 className={`text-lg font-bold mb-2 group-hover:${item.tagColor} transition-colors`}>
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
  )
}
