document.addEventListener("DOMContentLoaded", function() {

  document.querySelector("body>div:nth-of-type(2) h3 span").textContent = Math.floor((new Date() - new Date("Dec 20 2003")) / 31536000000);

  document.querySelector("footer").textContent = "Copyright © " + new Date().getFullYear() + " Cameron Samuels";
  
  var images = document.querySelectorAll("img");
  for (i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", function(e) { e.preventDefault() });
  }

  document.querySelector("body>div:nth-of-type(3)").addEventListener("click", function(){ window.location = "https://git.io/vQlve" });
  document.querySelector("body>div:nth-of-type(5)").addEventListener("click", function(){ window.location = "https://git.io/vhvmo" });
  document.querySelector("body>div:nth-of-type(6)").addEventListener("click", function(){ window.location = "https://git.io/vpZxN" });
  document.querySelector("body>div:nth-of-type(9)").addEventListener("click", function(){ window.location = "https://bocracy.com" });
  document.querySelector("body>div:nth-of-type(12)").addEventListener("click", function(){ window.location = "https://git.io/vQlve" });
  
});
