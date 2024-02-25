document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('fetch-button').addEventListener('click', function() {
      const apiKey = '2e3efbdfaf374e85bb503536242502';
      const city = document.getElementById('city-input').value;
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const weatherData = data.current;
  
          document.getElementById('weather-data').innerHTML = JSON.stringify(weatherData, null, 2);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    });
  });