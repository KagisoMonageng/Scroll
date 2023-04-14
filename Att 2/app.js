// Sections
const intro = document.querySelector(".intro");
const secondSec = document.querySelector(".second");

// Videos
const videoIntro = intro.querySelector("video");
const videoSecond = secondSec.querySelector("video");

// Texts
const textIntro = intro.querySelector("h1");
const textSecond = secondSec.querySelector("h1");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
const secondController = new ScrollMagic.Controller();


//Scenes
let introScene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

let secondScene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: secondSec,
  triggerHook: 0
})
  .addIndicators()
  .setPin(secondSec)
  .addTo(secondController);

//Text Animation
const textOpacity = TweenMax.fromTo(textIntro, 3, { opacity: 1 }, { opacity: 0 });
const textSlide = TweenMax.fromTo(textIntro, 3, { opacity: 1 }, { opacity: 0 });


let introSceneText = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textOpacity)
  .addTo(controller);

  let secondSceneText = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: secondSec,
    triggerHook: 0
  })
    .setTween(textSlide)
    .addTo(secondController);



introScene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

secondScene.on("update", e => {
  scroll_two = e.scrollPos / 1000;
});

if(isElementInViewport(intro)){
  //videoIntro Animation
let accelamount = 0.1;
let scrollpos = 0;
let scroll_two = 0;
let delay = 0;
  setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    videoIntro.currentTime = delay;
  }, 33.3);
}else if(isElementInViewport(secondSec)){

  let accelamount = 0.1;
let scrollpos = 0;
let scroll_two = 0;
let delay = 0;
  setInterval(() => {
    delay += (scroll_two - delay) * accelamount;
    console.log(scroll_two, delay);
    videoSecond.currentTime = delay;
  }, 33.3);
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
