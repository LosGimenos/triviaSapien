import React, { Component } from 'react';

import Hero from './hero.jsx';
import Show from './show.jsx';

export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Hero />
        <Show />
      </div>
    );
  }
}
