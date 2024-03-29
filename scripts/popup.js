document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('fetch-button').addEventListener('click', function() {
        const city = document.getElementById('city-input').value;
        let url = `https://api.weatherapi.com/v1/current.json?key=2e3efbdfaf374e85bb503536242502&q=${city}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let weatherDictionary = {
                    location: {
                        City: data.location.name,
                        Region: data.location.region,
                        Country: data.location.country
                    },
                    condition:{
                        Weather: " " + data.current.condition.text
                    },
                    current: {
                        Celsius: data.current.temp_c,
                        Fahrenheit: data.current.temp_f,
                        "Wind Speed MPH": data.current.wind_mph,
                        "Wind Speed KPH": data.current.wind_kph,
                        "Pressure MB": data.current.pressure_mb,
                        "Pressure IN": data.current.pressure_in,
                        Humidity: data.current.humidity,
                        "Chance of Clouds": data.current.cloud,
                        "Feels like (Celsius)": data.current.feelslike_c,
                        "Feels like (Fahrenheit)": data.current.feelslike_f,
                        "Visibility KM": data.current.vis_km,
                        "Visibility Miles": data.current.vis_miles,
                        UV: data.current.uv,
                        "Gust MPH": data.current.gust_mph,
                        "Gust KPH": data.current.gust_kph,
                        "Last Updated": data.current.last_updated
                    }
                };

                let allWeatherInfoStr = JSON.stringify(weatherDictionary.location, null, 2) +
                    JSON.stringify(weatherDictionary.condition, null, 0) +
                    JSON.stringify(weatherDictionary.current, null, 2);
                allWeatherInfoStr = allWeatherInfoStr.replace(/[{}"']/g, '');

                const weatherInfoElement = document.getElementById('weather-data');
                weatherInfoElement.textContent = allWeatherInfoStr;


                let weatherIcon = document.getElementById("weather-icon")
                let imageName = "./Icons/" + weatherDictionary.condition.Weather.toLowerCase().replace(/\s/g, "") + ".jpg";
                weatherIcon.innerHTML =  `<img src =${imageName}  />`
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    });
});
