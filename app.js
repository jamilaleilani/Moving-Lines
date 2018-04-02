  console.log("JS working??");

  var boardWidth = document.getElementById("page").offsetWidth;
  console.log("Board Width is: " + boardWidth);
  var boardHeight = document.getElementById("page").style.height = window.innerHeight;
  console.log(screen.height);
  console.log("innerHeight is: ",  window.innerHeight)


  //add divs for boardWidth/10

  for (var i = 0; i < boardHeight/20; i++) {
    var newLine = document.createElement("div");
    // if (i%2 != 0) {
    //   newLine.classList.add("line");
    // } else {
      newLine.classList.add("line");
    // }
    document.getElementById("artboard").appendChild(newLine);
    // newLine.style.paddingBottom = 2 + "px";
    newLine.style.transitionDuration = ((Math.random() * 2.5) + .5).toString() + "s";
  }

  for (var i = 0; i < boardHeight/24; i++) {
    var newLine = document.createElement("div");
    // if (i%2 != 0) {
    //   newLine.classList.add("line");
    // } else {
      newLine.classList.add("lineTwo");
    // }
    document.getElementById("artboardTwo").appendChild(newLine);
    // newLine.style.paddingBottom = 2 + "px";
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

document.querySelector("body").addEventListener("click", function() {
  var intervalID = window.setInterval(function() {goLines();}, 1);
  var intervalIDTwo = window.setInterval(function() {goLinesTwo();}, 1);
  document.getElementById("title").style.transitionDuration = "2s";
  document.getElementById("title").style.color = "transparent";
  var intervalIDThree = window.setInterval(function() {
    document.getElementById("text").style.transitionDuration = "6s";
    document.getElementById("text").style.color = "white";
  }, 1800);
});
