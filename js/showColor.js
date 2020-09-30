function showColor() {
  let inputColor = document.getElementById("inputColor").value;

  document.getElementById("rgbText").innerHTML = inputColor;
  document.getElementById("result").style.backgroundColor = inputColor;
}
