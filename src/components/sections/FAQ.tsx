'use client';

import FAQComponent from '../common/FAQComponent';
import { useTheme } from 'next-themes';

const FAQ = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark' ? true : false;

  const sampleFAQs = [
    {
      question: 'What is GDG?',
      answer:
        'Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
      accentColor: 'red',
    },
    {
      question: 'How can you become a part of GDG?',
      answer:
        "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It's a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
      accentColor: 'green',
    },
    {
      question: 'What does a GDG Lead do?',
      answer:
        'A GDG Lead fills a lot of shoes. He works with the university to build the club , recruit the core team , host workshops, build projects, collaborate with the local partners.',
      accentColor: 'blue',
    },
    {
      question: 'How is DSC related to Google?',
      answer:
        'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
      accentColor: 'yellow',
    },
    {
      question: 'How to reach us?',
      answer: 'Mail us at - dsc.rknec@gmail.com',
      accentColor: 'red',
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8 md:py-12 lg:py-16 px-4 sm:px-6`}
    >
      <FAQComponent title="FAQs" faqs={sampleFAQs} allowMultipleOpen={true} />
    </div>
  );
};

export default FAQ;
