function TabNav() {
 const tabMenu = document.querySelectorAll('.js-tabmenu li');
 const tabContent = document.querySelectorAll('.js-tabcontent section');
 if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');
  function activeTab(index) {
   tabContent.forEach((section) => {
    section.classList.remove('ativo');
   });
   tabContent[index].classList.add('ativo');
  }
  tabMenu.forEach((itemMenu, index) => {
   itemMenu.addEventListener('click', () => {
    activeTab(index);
   });
  });
 }
}
TabNav();
function accordion() {
 const acordionList = document.querySelectorAll('.js-accordion dt');
 const activeClass = 'ativo';
 if (acordionList.length) {
  acordionList[0].classList.add(activeClass);
  acordionList[0].nextElementSibling.classList.add(activeClass);
  function activeAccordion() {
   this.classList.toggle(activeClass);
   this.nextElementSibling.classList.toggle(activeClass);
  }
  acordionList.forEach((item) => {
   item.addEventListener('click', activeAccordion);
  });
 }
}
accordion();
function scrollSuave() {
 const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
 function scroollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
  });
  //forma anternativa
  //const topo = section.offsetTop;
  //window.scrollTo({ top: topo, behavior: 'smooth' });
 }
 linksInternos.forEach((link) => {
  link.addEventListener('click', scroollToSection);
 });
}
scrollSuave();
function animacaoScroll() {
 const section = document.querySelectorAll('.js-scroll');
 if (section.length) {
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
   section.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) section.classList.add('ativo');
    else section.classList.remove('ativo');
   });
  }
  window.addEventListener('scroll', animaScroll);
 }
}
animacaoScroll();
