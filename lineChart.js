// lineChart.js
document.addEventListener('DOMContentLoaded', function () {
    // Sample temperature data for 9 different cities (Bangalore, Vancouver, San Francisco, Las Vegas, Miami, Toronto, Chicago, Nashville, New York)
    const temperatureData = {
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
          label: 'Temperature',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [
            25, 26, 27, 28, 29, 30, 29, 28, 28, 27, 26, 25,
          ], // Sample temperature data for Bangalore
        },
      ],
    };
  
    // Get reference to the chart container
    const lineChartContainer = document
      .getElementById('line-chart')
      .getContext('2d');
  
    // Create initial chart
    const lineChart = new Chart(lineChartContainer, {
      type: 'line',
      data: temperatureData,
      options: {},
    });
  
    // Function to update chart based on selected city
    function updateChart(selectedCity) {
      // Lookup data for the selected city
      const newData = getTemperatureData(selectedCity);
      // Update chart with new data
      lineChart.data.datasets[0].data = newData;
      // Update chart colors based on selected city
      lineChart.data.datasets[0].backgroundColor =
        getBackgroundColor(selectedCity);
      lineChart.data.datasets[0].borderColor =
        getBorderColor(selectedCity);
      // Update chart
      lineChart.update();
    }
  
    // Event listener for city select dropdown
    const citySelect = document.getElementById('city-select');
    citySelect.addEventListener('change', function () {
      const selectedCity = this.value;
      updateChart(selectedCity);
    });
  
    // Function to get temperature data for a specific city
    function getTemperatureData(city) {
      switch (city) {
        case 'Bangalore':
          return [
            25, 26, 27, 28, 29, 30, 29, 28, 28, 27, 26, 25,
          ];
        case 'Vancouver':
          return [5, 6, 7, 10, 14, 18, 21, 21, 18, 13, 8, 5];
        case 'San Francisco':
          return [
            15, 16, 16, 17, 18, 19, 19, 20, 20, 19, 17, 15,
          ];
        case 'Las Vegas':
          return [
            10, 11, 12, 15, 19, 24, 27, 29, 28, 24, 19, 14,
          ];
        case 'Miami':
          return [5, 4, 5, 7, 10, 13, 15, 15, 13, 10, 7, 5];
        case 'Toronto':
          return [
            10, 11, 12, 14, 17, 20, 22, 22, 20, 17, 14, 10,
          ];
        case 'Chicago':
          return [
            20, 21, 22, 23, 23, 21, 19, 17, 16, 17, 18, 19,
          ];
        case 'Nashville':
          return [3, 4, 7, 12, 17, 22, 26, 28, 27, 22, 15, 8];
        case 'New York':
          return [5, 4, 5, 7, 10, 13, 15, 15, 13, 10, 7, 5];
        default:
          return [];
      }
    }
  
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
  