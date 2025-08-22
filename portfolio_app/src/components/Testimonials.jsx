import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials">
      <h1>🌟 Testimonials</h1>
      <p>Here's what people are saying about my work:</p>

      <div>
        <h4>Arsema</h4>
        <p>"Kalab is incredibly talented and dedicated. His work always exceeds expectations!"</p>

        <h4>Abenezer Tedla</h4>
        <p>"Working with Kalab was a pleasure. He brings creativity and professionalism to every project."</p>
      </div>

      <h3>Add Your Testimonial</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <textarea placeholder="Your Feedback"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Testimonials;
