const sidebar = document.getElementById("sidebar");
const sidebarDisplay = sidebar.style.display;

var myScrollFunc = async function () {
  if (window.scrollY >= 600) {
    if (sidebar.style.display === 'none') {
      sidebar.setAttribute('class', 'delay-[300ms] duration-[400ms] ease-[cubic-bezier(.47,0,.745,.715)] taos:translate-x-[200px] taos:opacity-0 aos item fixed top-0 right-0 z-40 w-24 lg:w-64 h-screen')
      sidebar.setAttribute('style', 'display:flex;')
    };
  } else {
     sidebar.setAttribute('class', 'fade-out aos item fixed top-0 right-0 z-40 w-64 h-screen')
  }
};


window.addEventListener("scroll", myScrollFunc);




