// Radar chart data
const radarChartData = {
    labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
        {
            label: 'Temperature (Bangalore)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [25, 26, 27, 28, 29, 30, 29, 28, 28, 27, 26, 25]
        },
        {
            label: 'Temperature (Vancouver)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [5, 6, 7, 10, 14, 18, 21, 21, 18, 13, 8, 5]
        },
        {
            label: 'Temperature (San Francisco)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            data: [15, 16, 16, 17, 18, 19, 19, 20, 20, 19, 17, 15]
        },
        {
            label: 'Temperature (Las Vegas)',
            backgroundColor: 'rgba(255, 0, 255, 0.2)',
            borderColor: 'rgba(255, 0, 255, 1)',
            borderWidth: 1,
            data: [10, 11, 12, 15, 19, 24, 27, 29, 28, 24, 19, 14]
        },
        {
            label: 'Temperature (Miami)',
            backgroundColor: 'rgba(72, 118, 255, 0.2)',
            borderColor: 'rgba(72, 118, 255, 1)',
            borderWidth: 1,
            data: [5, 4, 5, 7, 10, 13, 15, 15, 13, 10, 7, 5]
        },
        {
            label: 'Temperature (Toronto)',
            backgroundColor: 'rgba(198, 226, 255, 0.2)',
            borderColor: 'rgba(198, 226, 255, 1)',
            borderWidth: 1,
            data: [10, 11, 12, 14, 17, 20, 22, 22, 20, 17, 14, 10]
        },
        {
            label: 'Temperature (Chicago)',
            backgroundColor: 'rgba(127, 255, 212, 0.2)',
            borderColor: 'rgba(127, 255, 212, 1)',
            borderWidth: 1,
            data: [20, 21, 22, 23, 23, 21, 19, 17, 16, 17, 18, 19]
        },
        {
            label: 'Temperature (Nashville)',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1,
            data: [3, 4, 7, 12, 17, 22, 26, 28, 27, 22, 15, 8]
        },
        {
            label: 'Temperature (New York)',
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 1,
            data: [5, 4, 5, 7, 10, 13, 15, 15, 13, 10, 7, 5]
        },
    ]
};


// Radar chart configuration
const radarChartConfig = {
    type: 'radar',
    data: radarChartData,
    options: {
        scales: {
            r: {
                min: 0,
                max: 30, // Adjust the maximum value as needed
                ticks: {
                    stepSize: 5
                }
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    }
};

// Get the radar chart canvas element
const radarChartCanvas = document.getElementById('radar-chart').getContext('2d');

// Create the radar chart
const radarChart = new Chart(radarChartCanvas, radarChartConfig);
