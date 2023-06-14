import React, { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [showThanks, setShowThanks] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // add email logic later
    setShowThanks(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h1>Contact Me:</h1>
          {showThanks ? (
            <div className="success-message">
              <h2>Thank you for your message!</h2>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-field">
                <label className="form-label">Name</label>
                <input type="text" name="user_name" placeholder="Please enter your name" className="form-input" />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input type="email" name="user_email" placeholder="Please enter your email address" className="form-input" />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea name="message" placeholder="Please enter your message" className="form-textarea" />
              </div>
              <div className="button-wrapper">
                <input type="submit" value="Send Email" className="form-submit" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
