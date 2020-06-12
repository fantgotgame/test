'use strict'

const icon = document.querySelector(".animated-icon1");
const firstButton = document.querySelector(".first-button");
const headerButton = document.querySelector(".header__toggler");
const navbarTop = document.querySelector(".navbar-light");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const menuDrop = document.querySelector(".menu-drop");
const animatedIcon = document.querySelector(".animated-icon1");


function toggleIcon() {
    icon.classList.toggle("open");
}

firstButton.addEventListener("click", toggleIcon);

headerButton.addEventListener("click", function () {
    navbarTop.classList.toggle("is-close")
});

headerButton.addEventListener("click", function () {
    header.classList.toggle("is-close")
});

headerButton.addEventListener("click", function () {
    main.classList.toggle("is-close")
});

headerButton.addEventListener("click", function () {
    footer.classList.toggle("is-close")
});

headerButton.addEventListener("click", function () {
    menuDrop.classList.toggle("show")
});

headerButton.addEventListener("click", function () {
    animatedIcon.classList.toggle("open")
});

firstButton.addEventListener("click", function () {
    header.classList.toggle("is-close")
});

firstButton.addEventListener("click", function () {
    main.classList.toggle("is-close")
});

firstButton.addEventListener("click", function () {
    footer.classList.toggle("is-close")
});

firstButton.addEventListener("click", function () {
    navbarTop.classList.toggle("is-close")
});
