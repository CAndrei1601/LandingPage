// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menu").style.padding = "30px 10px";
    
    document.getElementById("menu").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}