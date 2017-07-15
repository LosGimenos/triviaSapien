import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  howItems: PropTypes.array.isRequired,
};

const HowItWorks = ({ howItems }) => {
  const renderItems = () => (
    howItems.map(howItem => (
      <li>
        <img src={howItem.img} alt="How it Works" />
        <div>
          <p>{howItem.copy}</p>
        </div>
      </li>
    ))
  );

  return (
    <div className="how-it-works">
      <h2>How it Works</h2>
      <hr />
      <ul>
        { renderItems() }
      </ul>
    </div>
  );
};

HowItWorks.propTypes = propTypes;
export default HowItWorks;
