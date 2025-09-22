'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Individual FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  accentColor = 'red',
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
}) => {
  const accentColors = {
    red: 'border-l-red-500',
    green: 'border-l-green-500',
    blue: 'border-l-blue-500',
    purple: 'border-l-purple-500',
    orange: 'border-l-orange-500',
    yellow: 'border-l-yellow-500',
  };

  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full border border-gray-300 border-10 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-full px-6 py-4 flex items-center text-left"
      >
        <div className="mr-4 flex-shrink-0 rounded-full p-2">
          {isOpen ? (
            <ChevronUp className="w-8 h-8 text-gray-600" />
          ) : (
            <ChevronDown className="w-8 h-8 text-gray-600" />
          )}
        </div>
        <span className="text-gray-600 font-bold text-2xl">{question}</span>
      </button>

      {isOpen && (
        <div className="mt-4 mx-4">
          <div
            className={`bg-gray-50 rounded-lg p-6 border-l-4 ${accentColors[accentColor as keyof typeof accentColors] || accentColors.red} border-l-12`}
          >
            <p className="text-gray-700 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Main FAQ Component
const FAQ = ({
  title = 'FAQs',
  faqs = [],
  allowMultipleOpen = false,
}: {
  title?: string;
  faqs: Array<{
    question: string;
    answer: string;
    accentColor?: string;
  }>;
  allowMultipleOpen?: boolean;
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index: number) => {
    if (allowMultipleOpen) {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
      setOpenItems(newOpenItems);
    } else {
      setOpenItems(openItems.has(index) ? new Set() : new Set([index]));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24">
      <h1 className="text-5xl font-bold text-gray-600 text-center mb-12">
        {title}
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
            accentColor={faq.accentColor || 'red'}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
