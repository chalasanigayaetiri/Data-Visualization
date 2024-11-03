document.addEventListener('DOMContentLoaded', function () {
    // Sample scatter data for 9 different cities (Bangalore, Vancouver, San Francisco, Las Vegas, Miami, Toronto, Chicago, Nashville, New York)
    const scatterData = {
      datasets: [
        {
          label: 'Temperature vs Pressure(Bangalore)',
          data: [
            { x: 17, y: 750 },
            { x: 15, y: 760 },
            { x: 26, y: 770 },
            { x: 8, y: 780 },
            { x: 9, y: 790 },
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(Vancouver)',
          data: [
            { x: 11, y: 850 },
            { x: 26, y: 855 },
            { x: 25, y: 860 },
            { x: 10, y: 865 },
            { x: 30, y: 870 },
          ],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(San Francisco)',
          data: [
            { x: 12, y: 950 },
            { x: 20, y: 955 },
            { x: 7, y: 960 },
            { x: 5, y: 965 },
            { x: 25, y: 970 },
          ],
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(Las Vegas)',
          data: [
            { x: 10, y: 1005 },
            { x: 11, y: 1007 },
            { x: 12, y: 1008 },
            { x: 15, y: 1009 },
            { x: 19, y: 1010 },
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(Miami)',
          data: [
            { x: 5, y: 1010 },
            { x: 4, y: 1008 },
            { x: 5, y: 1006 },
            { x: 7, y: 1004 },
            { x: 10, y: 1002 },
          ],
          backgroundColor: 'rgba(72, 118, 255, 0.5)',
          borderColor: 'rgba(72, 118, 255, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(Toronto)',
          data: [
            { x: 10, y: 1010 },
            { x: 11, y: 1011 },
            { x: 12, y: 1012 },
            { x: 14, y: 1011 },
            { x: 17, y: 1009 },
          ],
          backgroundColor: 'rgba(198, 226, 255, 0.5)',
          borderColor: 'rgba(198, 226, 255, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(Chicago)',
          data: [
            { x: 20, y: 1015 },
            { x: 21, y: 1013 },
            { x: 22, y: 1010 },
            { x: 23, y: 1007 },
            { x: 23, y: 1005 },
          ],
          backgroundColor: 'rgba(127, 255, 212, 0.5)',
          borderColor: 'rgba(127, 255, 212, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(Nashville)',
          data: [
            { x: 3, y: 1002 },
            { x: 4, y: 1044 },
            { x: 7, y: 1006 },
            { x: 12, y: 1058 },
            { x: 17, y: 1010 },
          ],
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          borderColor: 'rgba(0, 255, 0, 1)',
          borderWidth: 1,
        },
        {
          label: 'Temperature vs Pressure(New York)',
          data: [
            { x: 5, y: 1010 },
            { x: 4, y: 1008 },
            { x: 5, y: 1006 },
            { x: 7, y: 1004 },
            { x: 10, y: 997 },
          ],
          backgroundColor: 'rgba(255, 215, 0, 0.5)',
          borderColor: 'rgba(255, 215, 0, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    // Get reference to the chart container
    const scatterChartContainer = document
      .getElementById('scatter-chart')
      .getContext('2d');
  
    // Function to create scatter chart
    function createScatterChart(ctx, data, options) {
      return new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: options,
      });
    }
  
    // Create initial scatter chart
    const scatterChart = createScatterChart(
      scatterChartContainer,
      scatterData,
      {},
    );
  
    function updateScatterChart(city) {
      const datasetIndex = scatterData.datasets.findIndex(
        (dataset) => dataset.label.includes(city),
      );
      if (datasetIndex !== -1) {
        scatterChart.data.datasets.forEach(
          (dataset, index) => {
            if (index === datasetIndex) {
              // Highlight the selected city's dataset
              scatterChart.data.datasets[
                index
              ].backgroundColor = getBackgroundColor(city);
              scatterChart.data.datasets[index].borderColor =
                getBorderColor(city);
            } else {
              // Dim the other datasets
              scatterChart.data.datasets[
                index
              ].backgroundColor = 'rgba(0, 0, 0, 0.1)';
              scatterChart.data.datasets[index].borderColor =
                'rgba(0, 0, 0, 0.1)';
            }
          },
        );
        // Update the chart title with the selected city's name
        scatterChart.data.datasets[datasetIndex].label =
          `Temperature vs Pressure (${city})`;
        // Update the chart data with the selected city's data
        scatterChart.data.datasets[datasetIndex].data =
          scatterData.datasets[datasetIndex].data;
        // Update the chart
        scatterChart.update();
      } else {
        console.error('City data not found');
      }
    }
  
    // Function to get background color for a specific city
    function getBackgroundColor(city) {
      switch (city) {
        case 'Bangalore':
          return 'rgba(255, 99, 132, 0.5)';
        case 'Vancouver':
          return 'rgba(54, 162, 235, 0.5)';
        case 'San Francisco':
          return 'rgba(255, 206, 86, 0.5)';
        case 'Las Vegas':
          return 'rgba(255, 0, 255, 0.5)';
        case 'Miami':
          return 'rgba(72, 118, 255, 0.5)';
        case 'Toronto':
          return 'rgba(198, 226, 255, 0.5)';
        case 'Chicago':
          return 'rgba(127, 255, 212, 0.5)';
        case 'Nashville':
          return 'rgba(0, 255, 0, 0.5)';
        case 'New York':
          return 'rgba(255, 215, 0, 0.5)';
        default:
          return 'rgba(255, 99, 132, 0.5)'; // Default color
      }
    }
  
    // Function to get border color for a specific city
    function getBorderColor(city) {
      switch (city) {
        case 'Bangalore':
          return 'rgba(255, 99, 132, 1)';
        case 'Vancouver':
          return 'rgba(54, 162, 235, 1)';
        case 'San Francisco':
          return 'rgba(255, 206, 86, 1)';
        case 'Las Vegas':
          return 'rgba(255, 0, 255, 1)';
        case 'Miami':
          return 'rgba(72, 118, 255, 1)';
        case 'Toronto':
          return 'rgba(198, 226, 255, 1)';
        case 'Chicago':
          return 'rgba(127, 255, 212, 1)';
        case 'Nashville':
          return 'rgba(0, 255, 0, 1)';
        case 'New York':
          return 'rgba(255, 215, 0, 1)';
        default:
          return 'rgba(255, 99, 132, 1)'; // Default color
      }
    }
  
    // Event listener for city select dropdown
    const citySelect = document.getElementById('city-select');
    citySelect.addEventListener('change', function () {
      const selectedCity = this.value;
      updateScatterChart(selectedCity);
    });
  });
  