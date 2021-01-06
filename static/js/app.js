/* take json, turn into traces for plotly
use dropdowns
horizontal, bubble, gauge optional
remember filter statements from previous assignments
intro javascript d3: for each statements, 
"metadata" is a part of the json
ask Jacob/Peter about starter code for javascript 

//horizontal bargraph template
*/

/*1. Use the D3 library to read in samples.json.


Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.




Use sample_values as the values for the bar chart.


Use otu_ids as the labels for the bar chart.


Use otu_labels as the hovertext for the chart.
/*
Use otu_ids for the x values.
Use sample_values for the y values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.
*/



//d3.json, load .then
var url = '../../samples.json';
d3.json(url).then(function(samples) {
  console.log(samples);
});
//init populate dropdowns, dropdown change, filtering


  

var dataset = dropdown.property("value");
var x = [];
var y = [];

var data = [{
  type: 'bar',
  
  x: [0,50,100,150],
  y: [dataset];
  orientation: 'h'
  layout = ];




//bubble template
var trace1 = {
  x: [1, 2, 3, 4],
  y: [0,50,100,150,200],
  mode: 'markers',
  marker: {
    size: [0,500,1000,1500,2000,2500,3000]
  }
};
var layout = {
  hovermode: 'closest',
  title:'Hover on a Point<br>to Change Color'
};
var dropdown = d3.select("#selDataset")
d3.selectAll("#selDataset").on("change", editgraph);

function editgraph() {
  var name = dropdown.property("value");
};

//needs data object
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  var bacteria_trace = {  
    x:
    y:
    text: //filter statement for bacteria id
    name: "Top 10 Bacteria Found"
    type: "bar"
    orientation: 'h'
};
  

Plotly.newPlot('myDiv', data, layout);
var data = [trace1];
var layout = {
    title: "Top 10 Bacteria Found",
    // fill in margin values
    margin: {
      l: 
      r:
      t:
      b:
      hovermode:'closest',
      
    }
  };
  Plotly.newPlot('bar', data, layout);
  // import json, define sample ids and get dropdown values
  function init() {
  var url = '../../samples.json';
  d3.json(url).then(function(samples) {
    //console.log(samples);
    var sample_id = samples.names 
    sample_id.forEach(names => { 
      dropdown.append("option").text(names).property("value", names);
    });
  }); 
