import $ from 'jquery';
import * as ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import Linear from 'gsap';
import TimelineMax from 'gsap';
import Power1 from 'gsap';
import 'gsap';
import TweenLite from 'gsap';

//////////////////////////////////////
//3D Movement
//////////////////////////////////////

$(document).mousemove(function(event) {
  var mouseTranslate = {};
  var movementDegrees = {};
  var bodyHeight = $('body').height();
  var bodyWidth = $('body').width();
  var rotation = {};

  mouseTranslate.x = (bodyWidth / 2 - event.pageX) / (bodyWidth / 2);
  mouseTranslate.y = (bodyHeight / 2 - event.pageY) / (bodyHeight / 2);

  movementDegrees.x = 40;
  movementDegrees.y = 40;

  rotation.x = Math.floor(mouseTranslate.x * movementDegrees.x) + 'deg';
  rotation.y = Math.floor(mouseTranslate.y * movementDegrees.y) + 'deg';

  $('#letsMove').css(
    'transform',
    'rotate3d(0,5,0,' + rotation.x + ') rotate3d(5,0,0,' + rotation.y + ')'
  );
});


$(document).mousemove(function(event) {
  var mouseTranslate = {};
  var movementDegrees = {};
  var bodyHeight = $('body').height();
  var bodyWidth = $('body').width();
  var rotation = {};

  mouseTranslate.x = (bodyWidth / 2 - event.pageX) / (bodyWidth / 2);
  mouseTranslate.y = (bodyHeight / 2 - event.pageY) / (bodyHeight / 2);

  movementDegrees.x = 15;
  movementDegrees.y = 15;

  rotation.x = Math.floor(mouseTranslate.x * movementDegrees.x) + 'deg';
  rotation.y = Math.floor(mouseTranslate.y * movementDegrees.y) + 'deg';

  $('#letsMoveItYeah').css(
    'transform',
    'rotate3d(0,1,0,' + rotation.x + ') rotate3d(1,0,0,' + rotation.y + ')'
  );
});

//////////////////////////////////////
//COMPONENT FADE-IN/FADE-OUT FOR TEXT
//////////////////////////////////////

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container1Id'
  })
    .setClassToggle('#engagitechId', 'fade-out')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container3Id'
  })
    .setClassToggle('#container3Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container4Id'
  })
    .setClassToggle('#container4Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container5Id'
  })
    .setClassToggle('#container5Fade', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container6Id'
  })
    .setClassToggle('#container6Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container7Id'
  })
    .setClassToggle('#container7Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container8Id'
  })
    .setClassToggle('#container8Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container9Id'
  })
    .setClassToggle('#container9Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container10Id'
  })
    .setClassToggle('#container10Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container11Id'
  })
    .setClassToggle('#container11Id', 'fade-in')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#binarySVGID'
  })
    .setClassToggle('#blink-1', 'blink-1')
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#binarySVGID'
  })
    .setClassToggle('#blink-2', 'blink-2')
    .addTo(controller);
});

//////////////////////////////////////
//Light Speed
//////////////////////////////////////

$(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container12Id'
  })
    .setClassToggle('#lightSpeed', 'yeahBoi')
    .addTo(controller);
});

//////////////////////////////////////
//GRAYSCALE
//////////////////////////////////////

$(function() {
  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#hashtagPartyColor'
  })
    .setClassToggle('#hashtagPartyColor', 'lightsOn')
    .addTo(controller);
});

//////////////////////////////////////
//MOVEMENT
//////////////////////////////////////

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object1', 'movement1')
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object2', 'movement2')
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object3', 'movement3')
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object4', 'movement4')
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object5', 'movement5')
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object6', 'movement6')
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger'
  })
    .setClassToggle('#object7', 'movement7')
    .addTo(controller);
});
