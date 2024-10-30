// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata

    // Filter the metadata for the object with the desired sample number
    const desired = metadata.filter(item => item.id === sample);

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");


    // Inside a loop, you will need to use d3 to append new tags for each key-value in the filtered metadata.
    Object.entries(desired).forEach(([key, value]) => {
      
      panel.append("h6").text(`${key}: ${value}`);

    });
    console.log(metadata);
    console.log(desired);
    console.log(panel);
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;


    // Filter the samples for the object with the desired sample number
    const filteredsample = samples.filter(stuff => stuff.id === sample);


    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = filteredsample.otu_ids.slice(0,10).reverse();
    const otu_labels = filteredsample.otu_labels.slice(0, 10).reverse();
    const sample_values = filteredsample.sample_values.slice(0, 10).reverse();


    // Build a Bubble Chart
    const bubbledata = [{
      x: filteredsample.otu_ids,
      y: filteredsample.sample_values,
      text: filteredsample.otu_labels,
      mode: "markers",
      marker: {
        size: filteredsample.sample_values,
        color: filteredsample.otu_ids,
        colorscale: "Earth"
      }
    }];

    const bubblelayout = {
      title: "Bubble Chart",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" }
    };


    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbledata, bubblelayout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const bardata = [{
      type: 'bar',
      x: sample_values,
      y: otu_ids.map(id => `OTU ${id}`), // Format OTU IDs for display
      text: otu_labels,
      orientation: 'h'
    }];


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barlayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
      yaxis: { title: 'OTU IDs' }
    };


    // Render the Bar Chart
    Plotly.newPlot('bar', bardata, barlayout);
  

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const fieldNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    fieldNames.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    const firstSample = fieldNames[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
  
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
