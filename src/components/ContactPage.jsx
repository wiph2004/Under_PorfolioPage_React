import React from 'react';
import ContactForm from './help/formSubmit';


const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form data received in ContactPage:', formData);
  };

  return (
    <div className="container pt-4">
    <h1>
      Contact Page
    </h1>
    <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;
