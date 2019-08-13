import Vue from 'vue'


//Toggle Class on scroll
var scrollBody = document.getElementsByTagName('body')[0];
var scrollPosition = window.scrollY;
window.addEventListener('scroll', function() {
scrollPosition = window.scrollY;
if (scrollPosition >= 2) {
scrollBody.classList.add('scrolling');
} else {
scrollBody.classList.remove('scrolling');
}});

