// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
let side1 = 5;
let side2 = 5;
let side3 = 5;
let perimetr = 0;

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
  side1 = slider1.value;
  triangleoutput();
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
  side2 = slider2.value;
  triangleoutput();
}
slider3.oninput = function() {
  output3.innerHTML = this.value;
  side3 = slider3.value;
  triangleoutput();
}

function triangleoutput(){
  let perimetr = (Number(side1) + Number(side2) + Number(side3))/2;
  let area = Math.sqrt(perimetr*((perimetr-side1)*(perimetr-side2)*(perimetr-side3)));
  output.innerHTML = Math.round(area*100)/100;
}
