const sidebar = document.getElementById("sidebar");
const sidebarDisplay = sidebar.style.display;

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    if (sidebar.style.display === 'none') {
      sidebar.setAttribute('class', 'delay-[300ms] duration-[400ms] taos:translate-x-[200px] taos:opacity-0 aos item fixed top-0 right-0 z-40 w-64 h-screen')
      sidebar.setAttribute('style', 'display:flex;')
    };
  } else {
     sidebar.setAttribute('style', 'display:none;')
  }
};


window.addEventListener("scroll", myScrollFunc);




