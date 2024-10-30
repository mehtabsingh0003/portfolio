// src/components/Contact.js
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    // Handle form submission logic here
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
