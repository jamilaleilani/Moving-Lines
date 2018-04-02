  console.log("JS working??");

  var boardHeight = document.getElementById("page").style.height = window.innerHeight;

  //have artboard resize with the window
  window.addEventListener("resize", function() {
    document.getElementById("artboard").style.height = window.innerHeight + "px";
    document.getElementById("artboardTwo").style.height = window.innerHeight + "px";
  })

  //make lines, randomize the speed at which they shrink
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


  //have lines shrink to 10px width
  var goLines = function(lines) {
    document.querySelectorAll(lines).forEach(function(line) {
      line.style.width = "10px";
    });
  }
  //function to have click disappear and text show up
  var textChange = function(element, time, color) {
    document.getElementById(element).style.transitionDuration = time;
    document.getElementById(element).style.color = color;
  }

  //on click event, calls on above two funcitons
  var clickGo = function(click) {
    document.querySelector("body").addEventListener(click, function() {
        window.setInterval(function() {goLines(".line");}, 1);
        window.setInterval(function() {goLines(".lineTwo");}, 1);
        textChange("title", "1s", "transparent")
        window.setInterval(function() {textChange("text", "6s", "white");}, 1500);
      });
  }

  //called on once for computer (click), and once for mobile (touchstart)
  clickGo("click");
  clickGo("touchstart");
