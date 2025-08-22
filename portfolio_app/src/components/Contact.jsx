import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <section id="contact">
      <h1>📬 Contact Me</h1>
      <p>Feel free to reach out for collaborations, questions, or just to say hi!</p>

      <div>
        <p><strong>Phone:</strong> +251 978 600 920</p>
        <p><strong>Email:</strong> KAlexkalab@gmail.com</p>
        <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
      </div>

      <h3>Send a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <textarea placeholder="Your Message"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
