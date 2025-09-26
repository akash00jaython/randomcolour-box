let a = document.getElementsByClassName("box");
function getRandomRGBColor() {
  return `rgb(${Math.random()*256|0}, ${Math.random()*256|0}, ${Math.random()*256|0})`;
}

for(let b=0; b<a.length; b++) {
  a[b].style.backgroundColor = getRandomRGBColor();
}
