import $ from 'jquery';
import * as ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import Linear from 'gsap';

//////////////////////////////////////
//COMPONENT FADE-IN/FADE-OUT FOR TEXT
//////////////////////////////////////

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container3Id',
  })
    .setClassToggle('#container3Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container4Id',
  })
    .setClassToggle('#container4Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container5Id',
  })
    .setClassToggle('#container5Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container6Id',
  })
    .setClassToggle('#container6Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container7Id',
  })
    .setClassToggle('#container7Id', 'fade-in')
    .addTo(controller);
});

//////////////////////////////////////
//GRAYSCALE
//////////////////////////////////////

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#hashtagPartyColor',
  })
    .setClassToggle('#hashtagPartyColor', 'lightsOn')
    .addTo(controller);
});

///

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var tween = TweenMax.to('#object1', 1, { rotation: 360, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({ triggerElement: '#trigger', duration: 100 })
    .setTween(tween)
    .setPin('#object1', { pushFollowers: false })
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
