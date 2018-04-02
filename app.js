  console.log("JS working??");

  var boardWidth = document.getElementById("page").offsetWidth;
  console.log("Board Width is: " + boardWidth);
  var boardHeight = document.getElementById("page").style.height = window.innerHeight;
  console.log("boardHeight:", boardHeight);
  console.log("innerHeight is: ",  window.innerHeight)


  window.addEventListener("resize", function() {
    document.getElementById("artboard").style.height = window.innerHeight + "px";
  })

  //add divs for boardWidth/10

  var makeLines = function(artboard, line) {
    for (var i = 0; i < boardHeight/20; i++) {
      var newLine = document.createElement("div");
      document.getElementById(artboard).style.height = boardHeight + "px";
      newLine.classList.add(line);
      document.getElementById(artboard).appendChild(newLine);
      newLine.style.transitionDuration = ((Math.random() * 2.5) + .5).toString() + "s";
    }
  }

  makeLines("artboard", "line");
  makeLines("artboardTwo", "lineTwo");

  var goLines = function(lines) {
    document.querySelectorAll(lines).forEach(function(line) {
      line.style.width = "10px";
    });
  }

  var textChange = function(element, time, color) {
    document.getElementById(element).style.transitionDuration = time;
    document.getElementById(element).style.color = color;
  }

  var clickGo = function(click) {
    document.querySelector("body").addEventListener(click, function() {
        window.setInterval(function() {goLines(".line");}, 1);
        window.setInterval(function() {goLines(".lineTwo");}, 1);
        textChange("title", "1s", "transparent")
        window.setInterval(function() {textChange("text", "6s", "white");}, 1500);
      });
  }

  clickGo("click");
  clickGo("touchstart");
