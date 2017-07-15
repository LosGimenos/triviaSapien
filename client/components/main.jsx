import React, { Component } from 'react';

import Hero from './hero.jsx';
import Show from './show.jsx';
import Plans from './plans.jsx';
import Testimonials from './testimonials.jsx';
import HowItWorks from './howItWorks.jsx';
import About from './about.jsx';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      plans: [
        {
          price: 79,
          title: 'El Jefe',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
        {
          price: 89,
          title: 'El Guapo',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
        {
          price: 99,
          title: 'The Party Ender',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
      ],
      testimonials: [
        {
          img: './assets/img/tacos.jpg',
          title: 'Rob',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
        {
          img: './assets/img/tacos.jpg',
          title: 'Sandra',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
        {
          img: './assets/img/tacos.jpg',
          title: 'Hutch',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
      ],
      howItems: [
        {
          img: './assets/img/enzoTrip.jpg',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
        {
          img: './assets/img/trekEnzo.jpg',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
        {
          img: './assets/img/bb8.jpg',
          copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, urna eu tincidunt egestas, lectus enim viverra diam, eu convallis ante mauris quis ipsum. Pellentesque semper rhoncus enim, quis tristique ex pellentesque ut.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="main-wrapper">
        <Hero />
        <Show />
        <HowItWorks
          howItems={this.state.howItems}
        />
        <Plans
          plans={this.state.plans}
        />
        <Testimonials
          testimonials={this.state.testimonials}
        />
        <About />
      </div>
    );
  }
}
