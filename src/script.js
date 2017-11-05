import $ from 'jquery';
import * as ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import Linear from 'gsap';
import TimelineMax from 'gsap';
import Power1 from 'gsap';
import 'gsap';
import TweenLite from 'gsap';

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

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#binarySVGID',
  })
    .setClassToggle('#blink-1', 'blink-1')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#binarySVGID',
  })
    .setClassToggle('#blink-2', 'blink-2')
    .addTo(controller);
});

//////////////////////////////////////
//GRAYSCALE
//////////////////////////////////////

$(function () {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#hashtagPartyColor',
  })
    .setClassToggle('#hashtagPartyColor', 'lightsOn')
    .addTo(controller);
});

//////////////////////////////////////
//MOVEMENT
//////////////////////////////////////


$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object1', 'movement1')
    .addTo(controller);
})

$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object2', 'movement2')
    .addTo(controller);
})

$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object3', 'movement3')
    .addTo(controller);
})

$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object4', 'movement4')
    .addTo(controller);
})

$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object5', 'movement5')
    .addTo(controller);
})

$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object6', 'movement6')
    .addTo(controller);
})


$(function () {

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger',
  })
    .setClassToggle('#object7', 'movement7')
    .addTo(controller);
})
