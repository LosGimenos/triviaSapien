import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  testimonials: PropTypes.array.isRequired,
};

const Testimonials = ({ testimonials }) => {
  const renderTestimonials = () => (
    testimonials.map(testimonial => (
      <li>
        <div>
          <h3>{testimonial.title}</h3>
        </div>
        <img src={testimonial.img} alt={testimonial.title} />
        <div>
          <p>{testimonial.copy}</p>
        </div>
      </li>
      ))
    );

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <hr />
      {renderTestimonials()}
    </div>
  );
};

Testimonials.propTypes = propTypes;
export default Testimonials;
