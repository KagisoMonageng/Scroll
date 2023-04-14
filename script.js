
// Sections
const firstSection = document.querySelector(".firstSection");
const introSection = document.querySelector(".intro-sec");
const lastSection = document.querySelector(".lastSection");

// Texts in sections
const textFirst = firstSection.querySelector("h1");
const textIntro = introSection.querySelector("h1");
const textLast = lastSection.querySelector("h1");

const textController = new ScrollMagic.Controller();
const lastController = new ScrollMagic.Controller();


const opacityAnimation = TweenMax.fromTo(textFirst, 3, { opacity: 0 }, { opacity: 1 });
const zoomAnimation = TweenMax.fromTo(textIntro, 1, { opacity: 1, scale:1 }, { opacity: 0,scale:1.5 });
const zoomAnimationLast = TweenMax.fromTo(textLast, 1, { opacity: 1, scale:1 }, { opacity: 0,scale:1.5 });



let introSceneText = new ScrollMagic.Scene({
  duration: 800,
  triggerElement: introSection,
  triggerHook: 0
}).setPin(introSection).setTween(zoomAnimation).addTo(textController);

let lastSceneText = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: lastSection,
    triggerHook: 0
  }).setPin(lastSection).setTween(zoomAnimationLast).addTo(lastController);



