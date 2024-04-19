import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    // Form data
    const formData = {
      name,
      email,
      message,
    };

    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <textarea value={message} onChange={handleMessageChange} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;