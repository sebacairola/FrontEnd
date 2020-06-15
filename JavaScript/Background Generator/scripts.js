var body = document.getElementsByTagName("body")[0];

var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];

var h3 = document.querySelector("h3");

function updateColor(){
  body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";

  h3.innerHTML = body.style.background;
}

color1.addEventListener("input", updateColor);

color2.addEventListener("input", updateColor);
