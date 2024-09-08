import React from 'react';
import '../App.css';

const Contact: React.FC = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or just want to get in touch, feel free to reach out to us.
      </p>
      <h2>Get in Touch</h2>
      <p>
        Email: <a href="mailto:support@example.com">support@example.com</a>
      </p>
      <p>
        Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
      </p>
      <h2>Follow Us</h2>
      <p>
        Stay connected and follow us on social media:
      </p>
      <ul>
        <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
      <h2>Visit Us</h2>
      <p>
        Address: 123 Main Street, Hometown, ABC 12345
      </p>
      <p>
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
      </p>
    </div>
  );
}

export default Contact;