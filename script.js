
// // Sections
// const firstSection = document.querySelector(".firstSection");
// const introSection = document.querySelector(".intro-sec");
// const lastSection = document.querySelector(".lastSection");

// const doublecontextSection = document.querySelector(".double-context");
// // Texts in sections
// const textFirst = firstSection.querySelector("h1");
// const textIntro = introSection.querySelector("h1");
// const textLast = lastSection.querySelector("h1");
// //double context
// const rightTextLast = lastSection.querySelector("h1");

// const textController = new ScrollMagic.Controller();
// const lastController = new ScrollMagic.Controller();


// const opacityAnimation = TweenMax.fromTo(textFirst, 3, { opacity: 0 }, { opacity: 1 });
// const zoomAnimation = TweenMax.fromTo(textIntro, 1, { opacity: 1, scale:1 }, { opacity: 0,scale:1.5 });
// const zoomAnimationLast = TweenMax.fromTo(textLast, 1, { opacity: 1, scale:1 }, { opacity: 0,scale:1.5 });

// //double context
// const opacityAnimationRightText = TweenMax.fromTo(textFirst, 3, { opacity: 0 }, { opacity: 1 });


// let introSceneText = new ScrollMagic.Scene({
//   duration: 800,
//   triggerElement: introSection,
//   triggerHook: 0
// }).setPin(introSection).setTween(zoomAnimation).addTo(textController);

// let lastSceneText = new ScrollMagic.Scene({
//     duration: 1000,
//     triggerElement: lastSection,
//     triggerHook: 0
//   }).setPin(lastSection).setTween(zoomAnimationLast).addTo(lastController);




// //double context
// // let doubleTextController = new ScrollMagic.Scene({
// //   duration: 1000,
// //   triggerElement: lastSection,
// //   triggerHook: 0
// // },{}).setPin(lastSection).setTween(zoomAnimationLast).addTo(doubleTextController);

// // var doubleTextController = new ScrollMagic.Scene({
// //   triggerElement: "#text-container",
// //   triggerHook: 0.5,
// //   duration: $("#text-container").height()
// // v})


// var textElements = document.querySelectorAll("#text-container p");

// // textElements.forEach(function(textElement) {
// //   var scene = new ScrollMagic.Scene({
// //     triggerElement: textElement,
// //     triggerHook: 0.5,
// //     duration: 0
// //   })
// //   .setClassToggle(textElement, "fade-in-out")
// //   .addTo(controller);
// // });
// //SCROLLMAGIC
// const controller = new ScrollMagic.Controller();

// //Scenes
// let scene = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .addIndicators()
//   .setPin(intro)
//   .addTo(controller);

// //Text Animation
// const textAnim = TweenMax.fromTo(textElements, 3, { opacity: 1 }, { opacity: 0 });

// let scene2 = new ScrollMagic.Scene({
//   duration: 9000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller);
// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//     triggerElement: '.container',
//     triggerHook: 'onEnter',
//     duration: '100%'
// })
// .setTween('.text', {opacity: 0})
// .addTo(controller);
// var text = document.querySelector('.text');
// var letters = text.textContent.split('');
// text.textContent = '';
// for (var i = 0; i < letters.length; i++) {
//     text.innerHTML += '<span class="letter">' + letters[i] + '</span>';
// }
// var tl = gsap.timeline();
// tl.staggerTo('.letter', 1, {opacity: 1}, 0.1);
// scene.setTween(tl);
// Initialize Scroll Magic controller



var texts = [
  "  <h1 ><span class='s-gold'>One <br></span>We are part of <span class='s-gold'>One Gold Fields</span> – a <br> united team with a single, <span class='s-gold'>unifying <br> Purpose, Vision, set of Values</span> and <br> culture. While we recognise and celebrate the many different <span class='s-gold'>people, <br> languages, countries and cultures</span> we <br> have around the world, we know that <br> we are all part of <span class='s-gold'>one family</span> that has <br> one purpose and one common Gold <br> Fields culture.</h1>",


  " <h1> <span class='s-gold'>Caring</span> We want our people <span class='s-gold'>to feel they truly <br> matter</span> – something that can only be <br> achieved through a culture of deep <br><span class='s-gold'>care, respect and kindness</span> . We want to <br> build a company where people are <br> eager and happy to come to work,<br> where they can build <span class='s-gold'> positive <br>relationships </span>with their colleagues and <br> can experience a sense of emotional <br> and psychological  <span class='s-gold'>safety.</span></h1>",

  "    <h1><span class='s-gold'>Courageous</span>We can achieve great things together if we have the courage to<span class='s-gold'>dream big</span>  and to push our personal and business boundaries. We look for new and better ways of doing things, for <span class='s-gold'>innovative</span> ways to get the job done safely and smartly. We are also brave enough to <span class='s-gold'>speak up </span>, have difficult conversations and listen to challenging feedback.</h1>",

  " <h1> class='text-white'><span class='s-gold'>Inclusive team</span> We know that <span class='s-gold'>our team is stronger</span> <br>  when we include our people with <br>different talents, world views, <br> cultural contexts, and problem-solving approaches. <span class='s-gold'>Diversity,  <br>equity and inclusions</span>  makes us <br> stronger, faster, smarter, better, and <br>  creates a space where everyone <br>feels they <span class='s-gold'>belong</span> </h1>",


  "<h1><span class='s-gold'>Connected</span>Being connected means  <span class='s-gold'>working <br> together</span> towards a common goal, with a <span class='s-gold'>single purpose</span>  in mind. <br> While we operate in locations  <span class='s-gold'>across the globe</span> and in many <br> different disciplines and  <br> departments, being connected <br> pulls us together as a  <span class='s-gold'>team</span> and <br> enables us to work smarter and seamlessly together.   </h1>",


  "<h1> <span class='s-gold'>Delivering great <br> impact  together </span> When we work together we can <br> make a  <span class='s-gold'>positive impact</span> on the lives <br>of all the people touched by our business. This is what it means to be <span class='s-gold'>#StrongerTogether</span> </h1>",






];

const left = document.querySelector("#left");
const right = document.querySelector("#right");


const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  console.log("before ", e.scrollPos);
  scrollpos = (e.scrollPos) / 1000;
  console.log("after ", scrollpos);
  console.log("int ,", parseInt(scrollpos));

  switch (splitter(scrollpos)) {
    case 1:
      left.innerHTML = texts[0];
      break;
    case 2:
      left.innerHTML = texts[1];
      break;
    case 3:
      right.innerHTML= ""
      left.innerHTML = texts[2];
      break;
    case 4:
      left.innerHTML = ""
      right.innerHTML = texts[3];
      break;
    case 5:
      right.innerHTML = texts[4];
      break;
    case 6:
      
      right.innerHTML = texts[5];
      break;
    default:
      left.innerHTML = ""
      right.innerHTML= ""
      break;
  }
});


setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //  console.log(scrollpos, delay);
  //console.log(scrollpos);

  video.currentTime = delay;
}, 33.3);


function splitter(num) {

  if (num <= 0.8 && num > 0) {
    return 1
  } else if (num <= 1.1 && num > 0.8) {
    return 2
  }
  else if (num <= 1.3 && num > 1.1) {
    return 3
  }
  else if (num <= 1.5 && num > 1.3) {
    return 4
  }
  else if (num <= 1.7 && num > 1.5) {
    return 5
  }
  else if (num <= 1.9 && num > 1.7) {
    return 6
  }
}