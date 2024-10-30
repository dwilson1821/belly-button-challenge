// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata

    // Filter the metadata for the object with the desired sample number
    const desired = metadata.filter(item => item.id === sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");


    // Inside a loop, you will need to use d3 to append new tags for each key-value in the filtered metadata.
    Object.entries(desired).forEach(([key, value]) => {
      
      panel.append("h6").text(`${key}: ${value}`);

    });
    
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;
    console.log(samples);

    // Filter the samples for the object with the desired sample number
    const filteredsample = samples.filter(stuff => stuff.id === sample)[0];


    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = filteredsample.otu_ids;
    const otu_labels = filteredsample.otu_labels;
    const sample_values = filteredsample.sample_values;


    // Build a Bubble Chart
    const bubbledata = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];

    const bubblelayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Number of Bacteria" }
    };


    // Render the Bubble Chart
    Plotly.newPlot('bubble', [bubbledata], bubblelayout);


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const bardata = [{
      type: 'bar',
      x: sample_values.slice(0,10),
      y: otu_ids.slice(0,10).map(id => `OTU ${id}`), // Format OTU IDs for display
      text: otu_labels,
      type: 'bar',
      orientation: 'h'
    }];


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barlayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
    };


    // Render the Bar Chart
    Plotly.newPlot('bar', [bardata], barlayout);
  

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const names = data.names;
    console.log(names);

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < names.length; i++) {
      dropdown.append("option").attr("value", names[i]).text(names[i])
    };

    // Get the first sample from the list
    const firstSample = names[0];
    console.log(firstSample);

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
