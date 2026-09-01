import React, { useState, useEffect } from 'react';
import './ConsultationPopup.css';
import { lockBodyScroll } from '../utils/bodyScrollLock';

const ConsultationPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Lock vertical scroll only while the modal is open
      const unlock = lockBodyScroll();
      return () => {
        unlock();
      };
    }

    return undefined;
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // API endpoint - adjust this URL based on your deployment
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Thank you for your interest! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', course: '' });
        
        // Close popup after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Failed to submit your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Network error. Please check your connection and try again.';
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Cannot connect to server. Please make sure the backend server is running on port 5000.';
      } else if (error.message.includes('CORS')) {
        errorMessage = 'CORS error. Please check server configuration.';
      }
      
      setSubmitStatus('error');
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-popup-overlay" onClick={handleOverlayClick}>
      <div className="consultation-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="consultation-popup-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="consultation-popup-content">
          <h2 className="consultation-popup-title">Free Consultation</h2>
          <p className="consultation-popup-subtitle">Fill out the form below and we'll get back to you soon.</p>
          
          <form className="consultation-popup-form" onSubmit={handleSubmit}>
            <div className="consultation-form-group">
              <label htmlFor="name" className="consultation-form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="consultation-form-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-form-group">
              <label htmlFor="phone" className="consultation-form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="consultation-form-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-form-group">
              <label htmlFor="email" className="consultation-form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="consultation-form-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-form-group">
              <label htmlFor="course" className="consultation-form-label">Course *</label>
              <input
                type="text"
                id="course"
                name="course"
                className="consultation-form-input"
                placeholder="Enter course name"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>

            {submitStatus && (
              <div className={`consultation-form-message ${submitStatus === 'success' ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}

            <button 
              type="submit" 
              className="consultation-form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;

