// Declares function scrollFunction
window.onscroll = function() {scrollFunction()};

// Initiates scrollFunction
function scrollFunction() {
// if page is scrolled down 70px from the top of the page then... 
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
   // getElementbyId="navbar" and change padding of navbar and height and width of img Id="me" 
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("me").style.height = "50px";
    document.getElementById("me").style.width = "100px";
   // else change navbar padding, and height and width of img Id="me"
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("me").style.height = "150px";
    document.getElementById("me").style.width = "250px";
  }
}