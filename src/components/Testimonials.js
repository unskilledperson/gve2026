import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Had a great experience with Global Vision Education while completing my MBA. The process was smooth and stress-free—from enrollment to receiving my certificate UAE-attested and mark sheets. Big thanks to Mr. Shan and the team for their professional and supportive approach. Highly recommend them for anyone pursuing higher education in Dubai!',
      name: 'Nikhildas',
      university: 'MBA Graduate',
      rating: 5,
      avatar: 'N'
    },
    {
      quote: 'I found global vision education to be affordable and very convenient. It\'s a great option for distance learning in the UAE. The materials were simple and easy to understand. Staff are very friendly and helpful.',
      name: 'Rinshad N',
      university: 'Distance Learning Student',
      rating: 5,
      avatar: 'RN'
    },
    {
      quote: 'I had a great experience with Global vision. Usually the university process, exams and certificate issuing are all tiring. But these guys made it very simple like a corporate customer service. I just had to only focus on studies and rest was taken care by the team. Thanks a ton!! Highly recommended for anyone in Dubai.',
      name: 'Nazeem KK',
      university: 'Graduate Student',
      rating: 5,
      avatar: 'NK'
    },
    {
      quote: 'I successfully completed my post graduation and Global vision helped me to reach my destiny. They have best staff with immense knowledge and they are very interactive. Go for your higher education without any difficulty by choosing them.',
      name: 'Ramya Reddy',
      university: 'Postgraduate Student',
      rating: 5,
      avatar: 'RR'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={index < rating ? "#FFD700" : "none"}
        stroke={index < rating ? "#FFD700" : "#FFD700"}
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What our Students Say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name-rating">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-university">{testimonial.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

