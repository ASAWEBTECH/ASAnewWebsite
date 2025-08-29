"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import AnimationWrapper from "./animation-wrapper";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is it true that ASA only teaches in English?",
    answer:
      "No, that's a common misconception. While English is the primary language of instruction, ASA offers a holistic and inclusive education based on U.S. academic standards, including Portuguese and French language courses to support multilingual development."
  },
  {
    question: "What curriculum does the American Schools of Angola follow?",
    answer:
      "ASA follows a U.S.-based curriculum that focuses on critical thinking, creativity, and global citizenship. The program is designed to prepare students for both American and international universities."
  },
  {
    question: "Do you offer extracurricular activities?",
    answer:
      "Yes, we offer a wide variety of extracurricular activities including sports, music, drama, STEM clubs, and community service programs to support students’ personal growth beyond the classroom."
  },
  {
    question: "Is ASA open to students who do not speak English fluently?",
    answer:
      "Absolutely. We provide English as a Second Language (ESL) support and personalized assistance to help non-native speakers integrate and succeed in our learning environment."
  },
  {
    question: "How to apply for admission?",
    answer:
      "Click on the link for a video explaining the admission process."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-90" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-16">
            <div className="items-center justify-center gap-3 mb-4">
              <HelpCircle style={{ justifySelf: "center"}} className="w-8 h-8 text-[#2e2b70] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#2e2b70]">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our curriculum, admission process, and school life
            </p>
          </div>
        </AnimationWrapper>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimationWrapper key={index} delay={0.1 + index * 0.1}>
              <div 
                className={`
                  bg-white rounded-xl shadow-sm border border-gray-100 
                  transition-all duration-300 hover:shadow-md
                  ${openIndex === index ? 'ring-2 ring-[#2e2b70]/20' : ''}
                `}
              >
                <button
                  className="flex w-full justify-between items-center text-left p-6 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className={`
                    text-lg font-semibold transition-colors duration-300
                    ${openIndex === index ? 'text-[#2e2b70]' : 'text-gray-800'}
                  `}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`
                      flex-shrink-0 w-5 h-5 transition-all duration-300
                      ${openIndex === index ? 
                        'transform rotate-180 text-[#2e2b70]' : 
                        'text-gray-400'
                      }
                    `}
                  />
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                  `}
                >
                  <div className="p-6 pt-0">
                    <div className="h-px bg-gray-100 -mx-6 mb-4" />
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimationWrapper delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center px-6 py-3 
                border border-transparent text-base font-medium rounded-md
                text-white bg-[#2e2b70] hover:bg-[#23225a] 
                transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
