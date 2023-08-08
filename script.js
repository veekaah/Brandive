"use strict";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function reveal2() {
  var revealsStu = document.querySelectorAll(".reveal-stu");

  for (var i = 0; i < revealsStu.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsStu[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      revealsStu[i].classList.add("active");
    } else {
      revealsStu[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");
  const openButton = faq.querySelector(".open-button");
  const closeButton = faq.querySelector(".close-button");

  faq.addEventListener("click", () => {
    answer.classList.toggle("active");

    openButton.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
  });
});

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".section-navigation");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
