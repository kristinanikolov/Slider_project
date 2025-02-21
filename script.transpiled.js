"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var shuffle = function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref = [array[j], array[i]];
      array[i] = _ref[0];
      array[j] = _ref[1];
    }
    return array;
  };
  var initializeSlides = function initializeSlides() {
    var slides = ['<div class="slide slide-ocean"><img src="Assets/slider-image-7.jpg" alt="Ocean"></div>', '<div class="slide slide-girl"><img src="Assets/slider-image-6.jpg" alt="Girl"></div>', '<div class="slide slide-dolphins"><img src="Assets/slider-image-9.jpg" alt="Dolphins"></div>', '<div class="slide slide-sea"><img src="Assets/slider-image-8.jpg" alt="Sea"></div>', '<div class="slide slide-surfer"><img src="Assets/slider-image-5.jpg" alt="Surfer"></div>', '<div class="slide slide-beach"><img src="Assets/slider-image-4.jpg" alt="Beach"></div>', '<div class="slide slide-stones"><img src="Assets/slider-image-1.jpg" alt="Stones"></div>', '<div class="slide slide-nature"><img src="Assets/slider-image-2.jpg" alt="Nature"></div>', '<div class="slide slide-sunset"><img src="Assets/slider-image-3.jpg" alt="Sunset"></div>'];
    var topSlides = shuffle([].concat(slides));
    var bottomSlides = shuffle([].concat(slides));
    document.querySelector('.slides-row.top-row').innerHTML = topSlides.join('');
    document.querySelector('.slides-row.bottom-row').innerHTML = bottomSlides.join('');
  };
  var slideRight = function slideRight(row) {
    row.appendChild(row.firstElementChild);
  };
  var slideLeft = function slideLeft(row) {
    row.insertBefore(row.lastElementChild, row.firstElementChild);
  };
  document.querySelector('.prev').addEventListener('mousedown', function () {
    this.querySelector('.normal').style.display = 'none';
    this.querySelector('.active').style.display = 'block';
    this.classList.add('active-prev');
  });
  document.querySelector('.prev').addEventListener('mouseup', function () {
    this.querySelector('.normal').style.display = 'block';
    this.querySelector('.active').style.display = 'none';
    this.classList.remove('active-prev');
    slideRight(document.querySelector('.slides-row.bottom-row'));
    slideRight(document.querySelector('.slides-row.top-row'));
  });
  document.querySelector('.next').addEventListener('mousedown', function () {
    this.querySelector('.normal').style.display = 'none';
    this.querySelector('.active').style.display = 'block';
    this.classList.add('active-next');
  });
  document.querySelector('.next').addEventListener('mouseup', function () {
    this.querySelector('.normal').style.display = 'block';
    this.querySelector('.active').style.display = 'none';
    this.classList.remove('active-next');
    slideLeft(document.querySelector('.slides-row.bottom-row'));
    slideLeft(document.querySelector('.slides-row.top-row'));
  });
  initializeSlides();
});
