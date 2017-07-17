import React from 'react';
import PropTypes from 'prop-types';

import ButtonCta from './buttonCta.jsx';
// import PlanItem from './planItem.jsx';

const propTypes = {
  plans: PropTypes.array.isRequired,
};

const Plans = ({ plans }) => {
  const renderPlanItems = (() => (
    plans.map(plan => (
      <li>
        <div className="plans--price">
          <p>${plan.price}</p>
        </div>
        <div className="plans--info">
          <h3>{plan.title}</h3>
          <p>{plan.info}</p>
        </div>
        <div className="plans--cta">
          <img src="../assets/img/maxypoo.png" alt="plans" />
          <ButtonCta />
        </div>
      </li>
    ))
  ));

  return (
    <div className="plans">
      <h2>Three Flights of Fright!</h2>
      <hr />
      <ul>
        { renderPlanItems() }
      </ul>
    </div>
  );
};

Plans.propTypes = propTypes;

export default Plans;
