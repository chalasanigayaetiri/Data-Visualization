// Get references to the chart containers
const temperatureChartContainer = document
  .getElementById('temperature-chart')
  .getContext('2d');
const pressureChartContainer = document
  .getElementById('pressure-chart')
  .getContext('2d');

// Function to create line chart
function createLineChart(ctx, data, options) {
  return new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
}

// Function to update chart data
function updateChartData(chart, newData) {
  chart.data = newData;
  chart.update();
}

// Function to update charts based on selected city and year
function updateCharts(selectedCity, selectedYear) {
  // Update temperature chart
  updateChartData(
    temperatureChart,
    temperatureData[selectedCity][selectedYear],
  );

  // Update pressure chart
  updateChartData(
    pressureChart,
    pressureData[selectedCity][selectedYear],
  );
}

// Function to create menu options
function createMenuOptions() {
  const cities = Object.keys(temperatureData);
  const years = Object.keys(temperatureData[cities[0]]);

  const cityDropdown =
    document.getElementById('city-dropdown');
  const yearDropdown =
    document.getElementById('year-dropdown');

  // Remove existing options
  cityDropdown.innerHTML = '';
  yearDropdown.innerHTML = '';

  // Create city dropdown
  cities.forEach((city) => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityDropdown.appendChild(option);
  });

  // Create year dropdown
  years.forEach((year) => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
  });
}

// Create initial charts and menu
const temperatureChart = createLineChart(
  temperatureChartContainer,
  {},
  {},
);
const pressureChart = createLineChart(
  pressureChartContainer,
  {},
  {},
);
createMenuOptions();

// Add event listener to the menu
document
  .getElementById('menu-container')
  .addEventListener('change', function () {
    const selectedCity =
      document.getElementById('city-dropdown').value;
    const selectedYear =
      document.getElementById('year-dropdown').value;
    updateCharts(selectedCity, selectedYear);
  });

// Initialize charts with default data
const initialCity = Object.keys(temperatureData)[0];
const initialYear = Object.keys(
  temperatureData[initialCity],
)[0];
updateCharts(initialCity, initialYear);
