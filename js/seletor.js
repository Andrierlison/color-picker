function mostrarCor() {
    var red = document.getElementById("red").value
    var green = document.getElementById("green").value
    var blue = document.getElementById("blue").value
    document.getElementById("resultado").innerHTML = `<h2>RBG(${red}, ${green}, ${blue})</h2>`
    document.getElementById("resultado").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
  }
