const howItems = document.querySelectorAll('.how-it-works li');
const testimonialItems = document.querySelectorAll('.testimonials li');
const plansItems = document.querySelectorAll('.plans li');

window.onload = () => {
  const controller = new ScrollMagic.Controller();

  const navScene = new ScrollMagic.Scene({
    triggerElement: '.show video',
  })
    .setClassToggle('.main-nav', 'scrolled-nav')
    .addTo(controller);

  howItems.forEach((item) => {
    const howItemsScene = new ScrollMagic.Scene({
      triggerElement: item,
    })
       .setClassToggle(item, 'fadeIn')
       .addTo(controller);
  });

  testimonialItems.forEach((item) => {
    const testimonialItemScene = new ScrollMagic.Scene({
      triggerElement: item,
    })
      .setClassToggle(item, 'zoom')
      .addTo(controller);
  });

  plansItems.forEach((item) => {
    const plansItemsScene = new ScrollMagic.Scene({
      triggerElement: item,
    })
      .setClassToggle(item, 'shake')
      .addTo(controller);
  });

};
