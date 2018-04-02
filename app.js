  console.log("JS working??");

  var boardWidth = document.getElementById("page").offsetWidth;
  console.log("Board Width is: " + boardWidth);
  var boardHeight = document.getElementById("page").style.height = window.innerHeight;
  console.log("boardHeight:", boardHeight);
  console.log("innerHeight is: ",  window.innerHeight)


  window.addEventListener("resize", function() {
    document.getElementById("page").style.height = window.innerHeight + "px";
    document.getElementById("artboard").style.height = window.innerHeight + "px";
  })

  //add divs for boardWidth/10

  for (var i = 0; i < boardHeight/20; i++) {
    var newLine = document.createElement("div");
    document.getElementById("artboard").style.height = boardHeight + "px";
    newLine.classList.add("line");
    document.getElementById("artboard").appendChild(newLine);
    newLine.style.transitionDuration = ((Math.random() * 2.5) + .5).toString() + "s";
  }

  for (var i = 0; i < boardHeight/20; i++) {
    var newLine = document.createElement("div");
    newLine.classList.add("lineTwo");
    document.getElementById("artboardTwo").appendChild(newLine);
    newLine.style.transitionDuration = ((Math.random() * 2.5) + .5).toString() + "s";
  }

  var goLines = function() {
    document.querySelectorAll(".line").forEach(function(line) {
      line.style.width = "10px";
    });
  }

  var goLinesTwo = function() {
    document.querySelectorAll(".lineTwo").forEach(function(line) {
      line.style.width = "10px";
    });
  }


  var textChange = function(element, time, color) {
    document.getElementById(element).style.transitionDuration = time;
    document.getElementById(element).style.color = color;
  }


  var clickGo = function(click) {
    document.querySelector("body").addEventListener(click, function() {
        window.setInterval(function() {goLines();}, 1);
        window.setInterval(function() {goLinesTwo();}, 1);
        textChange("title", "1s", "transparent")
        window.setInterval(function() {textChange("text", "6s", "white");}, 1500);
      });
  }


  clickGo("click");
  clickGo("touchstart");
