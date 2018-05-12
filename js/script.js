var fidgetIcon = document.querySelector("body>div:nth-of-type(5) img");
fidgetIcon.addEventListener("mousedown", function(e) { e.preventDefault() });
fidgetIcon.addEventListener("touchstart", function(e) { e.preventDefault() });
fidgetIcon.addEventListener("dragstart", function(e) { e.preventDefault() });

document.querySelector("body>div:nth-of-type(7) img").addEventListener("dragstart", function(e) { e.preventDefault() });
