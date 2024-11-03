// Sample temperature data for different cities
var citiesData = [
    { name: 'Bangalore', lat: 12.9716, lon: 77.5946, temp: 25 },
    { name: 'Vancouver', lat: 49.2827, lon: -123.1207, temp: 5 },
    { name: 'San Francisco', lat: 37.7749, lon: -122.4194, temp: 15 },
    { name: 'Las Vegas', lat: 36.1699, lon: -115.1398, temp: 10 },
    { name: 'Miami', lat: 25.7617, lon: -80.1918, temp: 5 },
    { name: 'Toronto', lat: 43.6532, lon: -79.3832, temp: 10 },
    { name: 'Chicago', lat: 41.8781, lon: -87.6298, temp: 20 },
    { name: 'Nashville', lat: 36.1627, lon: -86.7816, temp: 3 },
    { name: 'New York', lat: 40.7128, lon: -74.0060, temp: 5 }
];

// Create a map centered at a specific location and zoom level
var map = L.map('map').setView([37.7749, -122.4194], 4); // Set initial view to San Francisco

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Loop through the cities data and add markers to the map
for (var i = 0; i < citiesData.length; i++) {
    var marker = L.marker([citiesData[i].lat, citiesData[i].lon]).addTo(map);
    marker.bindPopup('City: ' + citiesData[i].name + '<br>Temperature: ' + citiesData[i].temp + '°C');
}
