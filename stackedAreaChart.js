document.addEventListener('DOMContentLoaded', function () {
    // Sample temperature data for 9 different cities (Bangalore, Vancouver, San Francisco, Las Vegas, Miami, Toronto, Chicago, Nashville, New York)
    const stackedAreaData = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Temperature (Bangalore)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [
            25, 26, 27, 28, 29, 30, 29, 28, 28, 27, 26, 25,
          ], // Sample temperature data for Bangalore
        },
        {
          label: 'Temperature (Vancouver)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [5, 6, 7, 10, 14, 18, 21, 21, 18, 13, 8, 5], // Sample temperature data for Vancouver
        },
        {
          label: 'Temperature (San Francisco)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          data: [
            15, 16, 16, 17, 18, 19, 19, 20, 20, 19, 17, 15,
          ], // Sample temperature data for San Francisco
        },
        {
          label: 'Temperature (Las Vegas)',
          backgroundColor: 'rgba(255, 0, 255, 0.5)',
          borderColor: 'rgba(255, 0, 255, 1)',
          borderWidth: 1,
          data: [
            10, 11, 12, 15, 19, 24, 27, 29, 28, 24, 19, 14,
          ], // Sample temperature data for San Las Vegas
        },
        {
          label: 'Temperature (Miami)',
          backgroundColor: 'rgba(72, 118, 255, 0.5)',
          borderColor: 'rgba(72, 118, 255, 1)',
          borderWidth: 1,
          data: [5, 4, 5, 7, 10, 13, 15, 15, 13, 10, 7, 5], // Sample temperature data for San Miami
        },
        {
          label: 'Temperature (Toronto)',
          backgroundColor: 'rgba(198, 226, 255, 0.5)',
          borderColor: 'rgba(198, 226, 255, 1)',
          borderWidth: 1,
          data: [
            10, 11, 12, 14, 17, 20, 22, 22, 20, 17, 14, 10,
          ], // Sample temperature data for Toronto
        },
        {
          label: 'Temperature (Chicago)',
          backgroundColor: 'rgba(127, 255, 212, 0.5)',
          borderColor: 'rgba(127, 255, 212, 1)',
          borderWidth: 1,
          data: [
            20, 21, 22, 23, 23, 21, 19, 17, 16, 17, 18, 19,
          ], // Sample temperature data for Chicago
        },
        {
          label: 'Temperature (Nashville)',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          borderColor: 'rgba(0, 255, 0, 1)',
          borderWidth: 1,
          data: [3, 4, 7, 12, 17, 22, 26, 28, 27, 22, 15, 8], // Sample temperature data for Nashville
        },
        {
          label: 'Temperature (New York)',
          backgroundColor: 'rgba(255, 215, 0, 0.5)',
          borderColor: 'rgba(255, 215, 0, 0.5)',
          borderWidth: 1,
          data: [5, 4, 5, 7, 10, 13, 15, 15, 13, 10, 7, 5], // Sample temperature data for New York
        },
      ],
    };
  
    // Get reference to the stacked area chart container
    const stackedAreaChartContainer = document
      .getElementById('stacked-area-chart')
      .getContext('2d');
  
    // Create initial stacked area chart
    const stackedAreaChart = new Chart(
      stackedAreaChartContainer,
      {
        type: 'line',
        data: stackedAreaData,
        options: {
          plugins: {
            filler: {
              propagate: true,
            },
            legend: {
              display: true, // Display legend
            },
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
              min: 0, // Set minimum value for y-axis
            },
          },
          elements: {
            line: {
              tension: 0.4,
              fill: 'origin',
            },
          },
        },
      },
    );
  
    // Function to update stacked area chart based on selected city
    function updateStackedAreaChart(city) {
      console.log('Updating chart for', city);
      // Find the dataset corresponding to the selected city
      const datasetIndex = stackedAreaData.datasets.findIndex(
        (dataset) => dataset.label.includes(city),
      );
      if (datasetIndex !== -1) {
        console.log('Dataset found at index:', datasetIndex);
        // Update colors for all datasets
        stackedAreaData.datasets.forEach((dataset, index) => {
          if (index === datasetIndex) {
            // Highlight the selected city's dataset
            stackedAreaChart.data.datasets[
              index
            ].backgroundColor = getBackgroundColor(city);
            stackedAreaChart.data.datasets[
              index
            ].borderColor = getBorderColor(city);
            // Update the chart title with the selected city's name
            stackedAreaChart.data.datasets[index].label =
              `Temperature (${city})`;
            // Update the chart data with the selected city's data
            stackedAreaChart.data.datasets[index].data =
              stackedAreaData.datasets[index].data;
          } else {
            // Dim the other datasets
            stackedAreaChart.data.datasets[
              index
            ].backgroundColor = 'rgba(0, 0, 0, 0.1)';
            stackedAreaChart.data.datasets[
              index
            ].borderColor = 'rgba(0, 0, 0, 0.1)';
          }
        });
        // Update the chart
        stackedAreaChart.update();
      } else {
        console.error('City data not found');
      }
    }
  
    // Event listener for city select dropdown
    const citySelect = document.getElementById('city-select');
    citySelect.addEventListener('change', function () {
      const selectedCity = this.value;
      updateStackedAreaChart(selectedCity);
    });
  
    // Function to get background color for a specific city
    function getBackgroundColor(city) {
      switch (city) {
        case 'Bangalore':
          return 'rgba(255, 99, 132, 0.2)';
        case 'Vancouver':
          return 'rgba(54, 162, 235, 0.2)';
        case 'San Francisco':
          return 'rgba(255, 206, 86, 0.2)';
        case 'Las Vegas':
          return 'rgba(255, 0, 255, 0.2)';
        case 'Miami':
          return 'rgba(72, 118, 255, 0.2)';
        case 'Toronto':
          return 'rgba(198, 226, 255, 0.2)';
        case 'Chicago':
          return 'rgba(127, 255, 212, 0.2)';
        case 'Nashville':
          return 'rgba(0, 255, 0, 0.2)';
        case 'New York':
          return 'rgba(255, 215, 0, 0.2)';
        default:
          return 'rgba(255, 99, 132, 0.2)'; // Default color
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
  });
  