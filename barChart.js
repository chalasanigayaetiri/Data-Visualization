document.addEventListener('DOMContentLoaded', function () {
    // Sample pressure data for 9 different cities (Bangalore, Vancouver, San Francisco, Las Vegas, Miami, Toronto, Chicago, Nashville, New York)
    const pressureData = {
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
          label: 'Pressure',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [
            1000, 1023, 1045, 1008, 1027, 950, 840, 890, 1013,
            1036, 1001, 1028,
          ], // Sample pressure data for Bangalore
        },
      ],
    };
  
    // Get reference to the chart container
    const barChartContainer = document
      .getElementById('bar-chart')
      .getContext('2d');
  
    // Create initial chart
    const barChart = new Chart(barChartContainer, {
      type: 'bar',
      data: pressureData,
      options: {},
    });
  
    // Function to update chart based on selected city
    function updateChart(selectedCity) {
      // Lookup data for the selected city
      const newData = getPressureData(selectedCity);
      // Update chart with new data
      barChart.data.datasets[0].data = newData;
      // Update chart colors based on selected city
      barChart.data.datasets[0].backgroundColor =
        getBackgroundColor(selectedCity);
      barChart.data.datasets[0].borderColor =
        getBorderColor(selectedCity);
      // Update chart
      barChart.update();
    }
  
    // Event listener for city select dropdown
    const citySelect = document.getElementById('city-select');
    citySelect.addEventListener('change', function () {
      const selectedCity = this.value;
      updateChart(selectedCity);
    });
  
    // Function to get pressure data for a specific city
    function getPressureData(city) {
      switch (city) {
        case 'Bangalore':
          return [
            1000, 1023, 1045, 1008, 1027, 950, 840, 890, 1013,
            1036, 1001, 1028,
          ];
        case 'Vancouver':
          return [
            837, 943, 1054, 1005, 1032, 1012, 1028, 1046,
            1032, 843, 765, 854,
          ];
        case 'San Francisco':
          return [
            1012, 1010, 1011, 1010, 1009, 1008, 1008, 1009,
            1010, 1011, 1011, 1012,
          ];
        case 'Las Vegas':
          return [
            1005, 1007, 1008, 1009, 1010, 1009, 1007, 1005,
            1003, 1001, 1000, 999,
          ];
        case 'Miami':
          return [
            1010, 1008, 1006, 1004, 1002, 1000, 998, 996, 994,
            992, 990, 988,
          ];
        case 'Toronto':
          return [
            1010, 1011, 1012, 1011, 1009, 1007, 1005, 1004,
            1003, 1002, 1001, 1000,
          ];
        case 'Chicago':
          return [
            1015, 1013, 1010, 1007, 1005, 1004, 1005, 1006,
            1008, 1010, 1012, 1014,
          ];
        case 'Nashville':
          return [
            1002, 1044, 1006, 1058, 1010, 1012, 1014, 1016,
            1018, 889, 1017, 728,
          ];
        case 'New York':
          return [
            1010, 1008, 1006, 1004, 997, 800, 998, 996, 994,
            992, 990, 988,
          ];
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
  