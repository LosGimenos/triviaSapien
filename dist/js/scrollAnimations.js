const howItems = document.querySelectorAll('.how-it-works li');
const testimonialItems = document.querySelectorAll('.testimonials li');

console.log(testimonialItems)

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

};
