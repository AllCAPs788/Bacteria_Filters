/*Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
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
var url = 'samples.json';
// d3.json(url).then(function(samples) {
//   console.log(samples);
// });
//init populate dropdowns, dropdown change, filtering

var dropdown = d3.select("#selDataset");

// //create dropdowns via javascript
// var dataset = dropdown.property("value");

//d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged(value) {
  console.log(value);
  //var name = dropdown.property("value");
  d3.json(url).then(function(data) {
  //filter and map statements 
  //filter value variable for specific information and correct json: either names, metadata, or samples, refer to GitLab
  //add text to demo table (id="sample-metadata"), add h tags for text 
  //refer to formatted json
  var samples = data.samples;
  var sorted_sample_values = samples.filter(sample => {
    return sample.id == value
  });
  console.log(sorted_sample_values);
  //add plotly traces (or make sure plotly can see these defined statements for json and filtering)
//bubble template
  
//check templates 50-68
// var trace1 = {
//     x: sorted_sample_values[0].otu_ids,
//     y: sorted_sample_values[0].sample_values,
//     mode: 'markers',
//     marker: {
//       size: sorted_sample_values[0].sample_values
//     }
//   };
//   var bubble = [trace1];
//   var layout = {
//     title: 'OTU ID',
//     showlegend: false,
//     // height: 600,
//     // width: 600,
  
//     hovermode: sorted_sample_values[0].otu_labels
    
//   };

//    Plotly.newPlot('myDiv', bubble, layout);

  var data = [{
    type: 'bar',
    x: sorted_sample_values[0].otu_ids,
    y: sorted_sample_values[0].sample_values,
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', data);





});
};

optionChanged(940);
/*Object.entries(result).forEach(([key, value]) => {
  PANEL = d3.select(#sample-metadata)
  PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
});
.foreach(key,value) for demographic data
//needs data object
//   var data = [trace1];
  
//   var layout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//   var bacteria_trace = {  
//     x:
//     y:
//     text: //filter statement for bacteria id
//     name: "Top 10 Bacteria Found"
//     type: "bar"
//     orientation: 'h'
// };
  

// Plotly.newPlot('myDiv', data, layout);
// var data = [trace1];
// var layout = {
//     title: "Top 10 Bacteria Found",
//     // fill in margin values
//     margin: {
//       l: 
//       r:
//       t:
//       b:
//       hovermode:'closest',
      
//     }
//   };
  //Plotly.newPlot('bar', data, layout);
  // import json, define sample ids and get dropdown values
  function init() {
  //var url = '../../samples.json';
 */
  d3.json(url).then(function(samples) {
    //console.log(samples);
    var sample_id = samples.names;
    sample_id.forEach(names => { 
      dropdown.append("option").text(names).property("value", names);
    });
  }); 


