AOS.init();
const main = () => {
  //button hamburger
  const btnhum = document.querySelector("#btnhum");
  const navMenu = document.querySelector("#nav-menu");
  btnhum.addEventListener("click", function () {
    btnhum.classList.toggle("btnhum-active");
    navMenu.classList.toggle("hidden");
  });
};

window.onscroll = function () {
  const header = document.querySelector("header");
  const btt = document.querySelector("#btt");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    btt.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    btt.classList.add("hidden");
  }
};

main();

export default main;
