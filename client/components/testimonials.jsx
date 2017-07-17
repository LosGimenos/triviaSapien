import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  testimonials: PropTypes.array.isRequired,
};

const Testimonials = ({ testimonials }) => {
  const renderTestimonials = () => (
    testimonials.map(testimonial => (
      <li>
        <img src={testimonial.img} alt={testimonial.title} />
        <div>
          <h3>{testimonial.title}</h3>
          <p>{testimonial.copy}</p>
        </div>
      </li>
      ))
    );

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <hr />
      <ul>
        {renderTestimonials()}
      </ul>
    </div>
  );
};

Testimonials.propTypes = propTypes;
export default Testimonials;
