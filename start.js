/* take json, turn into traces for plotly
use dropdowns
horizontal, bubble, gauge optional
remember filter statements from previous assignments
intro javascript d3: for each statements, 
"metadata" is a part of the json
ask Jacob/Peter about starter code for javascript 

//horizontal bargraph template
*/
var data = [{
  type: 'bar',
  x: [20, 14, 23],
  y: ['giraffes', 'orangutans', 'monkeys'],
  orientation: 'h'
}];

Plotly.newPlot('myDiv', data);