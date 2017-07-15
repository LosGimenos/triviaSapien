import React from 'react';

const Show = () => (
  <div className="show">
    <h2>Smarter Pub Trivia</h2>
    <hr />
    <video className="show--video" controls>
      <source
        src="../assets/vid/show-vid.mp4"
        type="video/mp4"
      />
    </video>
    <div className="show--cta">
      <h3>Try it Out!</h3>
    </div>
  </div>
  );

export default Show;
