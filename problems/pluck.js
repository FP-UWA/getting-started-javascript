/*
  Run this file with the command:
    "npx babel-node problems/pluck.js"

  Using < array.prototype.map > write a function
  that accepts an array and a string representing 
  a property name and return an array containing 
  that property from each object. 
  
  For Example:
    Input: [{color: "red"}, {color: "blue"}], "color"
    Output: ["red", "blue"]
*/

var paints = [
  { shape: "square", color: "red" },
  { shape: "triangle", color: "blue" }
];

const property = "shape";

/*
function pluck(array, property) {
  return array.map(function(element) {
    return element[property];
  });
}
*/

paints.map((el, ind, array));

const new_array = (array => array.map(el => el.color))();

var new_array = [];
for (var i = 0; i < array.length; i++) {
  var el = array[i];
  var new_el = el.color;
  new_array.push(new_el);
}

const pluck = (array, property) =>
  array.map(({ [property]: plucked }) => plucked);

var result = pluck(paints, property);

console.log(result);
