document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('fetch-button').addEventListener('click', function() {
      const city = document.getElementById('city-input').value;
      var url = `https://api.weatherapi.com/v1/current.json?key=2e3efbdfaf374e85bb503536242502&q=${city}&aqi=no`;
      
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var weatherDictionary = {
            location: {
              name: data.location.name,
              region: data.location.region,
              country: data.location.country
            },
            current: {
              last_updated: data.current.last_updated,
              temp_c: data.current.temp_c,
              temp_f: data.current.temp_f,
              condition: {
                text: data.current.condition.text,
                icon: data.current.condition.icon
              },
              wind_mph: data.current.wind_mph,
              wind_kph: data.current.wind_kph,
              pressure_mb: data.current.pressure_mb,
              pressure_in: data.current.pressure_in,
              humidity: data.current.humidity,
              cloud: data.current.cloud,
              feelslike_c: data.current.feelslike_c,
              feelslike_f: data.current.feelslike_f,
              visibility_km: data.current.vis_km,
              visibility_miles: data.current.vis_miles,
              uv: data.current.uv,
              gust_mph: data.current.gust_mph,
              gust_kph: data.current.gust_kph
            }
          };

          const weatherInfoElement = document.getElementById('weather-data');
          weatherInfoElement.textContent = JSON.stringify(weatherDictionary, null, 2); // Convert dictionary to formatted JSON string
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });
});