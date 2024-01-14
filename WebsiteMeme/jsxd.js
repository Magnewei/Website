const btn = document.getElementById("button1");
const btnI = document.getElementById("button2");
const btnD = document.getElementById("button3");
const btnR = document.getElementById("button4");
let tmpVarColor = "";
let count = 0;


btn.addEventListener("click", function color() {

  // Array of colors.
  const colors = ["red", "blue", "yellow", "white", "grey", "blue", "teal"];

  // Used for holding color assigned from array.
  const varColor = colors[Math.floor(Math.random() * colors.length)]; 
  

  if (tmpVarColor != varColor) {
    tmpVarColor = varColor;

     // Change button of background to random color from ArrayList.
    document.body.style.backgroundColor = varColor;

    // Prints what color the site changed to HTML element:
    document.getElementById('yolo').innerHTML =
      "Changed color to " + varColor + ".";
      console.log(varColor);
  } else {
    color();
  }
});

// Increment each time button is pressed.
btnI.addEventListener("click", function increment() {
    document.getElementById("counter").innerHTML = count++;

});


// Decrement each time button is pressed.
btnD.addEventListener("click", function decrement() {
  document.getElementById("counter").innerHTML = count--;
});

// Reset counter each time button is pressed.
btnR.addEventListener("click", function resetCounter() {
  count = 0;
  document.getElementById("counter").innerHTML = count;
  
});




