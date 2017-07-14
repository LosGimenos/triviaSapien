import React from 'react';

const Show = () => {
  return (
    <div className="show">
      <h2>Smarter Pub Trivia</h2>
      <video className="show--video" controls>
        <source src='../assets/vid/show-vid.mp4'
        type="video/mp4" />
      </video>
    </div>
  );
};

export default Show;
