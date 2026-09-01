import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState(new Set([1, 3])); // Start with items 1 and 3 open

  const faqs = [
    {
      question: 'Can international students enroll in distance education programs?',
      answer: 'Yes - many accredited distance education programs are available to students worldwide, allowing global access without relocating.'
    },
    {
      question: 'Are distance education courses recognized by employers?',
      answer: 'Yes - as long as the degree or certificate is from an accredited institution, it is widely accepted by employers and for further studies.'
    },
    {
      question: 'Are exams in distance education conducted online or offline?',
      answer: 'Exams can be online, proctored remotely, or conducted at designated centers depending on the program and university policies.'
    },
    {
      question: 'Can I balance work and studies if I choose distance learning?',
      answer: 'Yes - one of the main advantages of distance learning is flexibility, allowing you to study on your own schedule while working full-time or attending to other responsibilities.'
    },
    {
      question: 'What should I check before enrolling in a distance education program?',
      answer: 'Verify that the institution is accredited, the degree is recognised, course content matches your goals, fee structure is transparent, and student support services are available.'
    },
    {
      question: 'Do you provide program guidance and advisory solutions?',
      answer: 'Yes, we offer comprehensive program guidance and advisory solutions to help you choose the right course and navigate your educational journey.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-label">FAQS</div>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        
        <div className="faq-grid">
          <div className="faq-column">
            {faqs.slice(0, 3).map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openIndices.has(index) ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`faq-chevron ${openIndices.has(index) ? 'open' : ''}`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openIndices.has(index) && faq.answer && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="faq-column">
            {faqs.slice(3, 6).map((faq, index) => {
              const actualIndex = index + 3;
              return (
                <div key={actualIndex} className="faq-item">
                  <button 
                    className={`faq-question ${openIndices.has(actualIndex) ? 'active' : ''}`}
                    onClick={() => toggleFAQ(actualIndex)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className={`faq-chevron ${openIndices.has(actualIndex) ? 'open' : ''}`}
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {openIndices.has(actualIndex) && faq.answer && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

