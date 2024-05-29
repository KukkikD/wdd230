const apiKey = 'b5b0dce917b1d82edc871186b5d848ec';
const lat = '46.65609760471162';
const lon = '-122.97766335765981';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeatherData() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        displayWeather(weatherData, forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(weatherData, forecastData) {
    const currentTemp = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const weatherIcon = weatherData.weather[0].icon;

    // Display current weather
    document.getElementById('currentTemp').textContent = `${currentTemp}°F`;
    document.getElementById('weatherDescription').textContent = weatherDescription;
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

    // Display 3-day forecast
    const forecastElement = document.getElementById('forecast');
    forecastElement.innerHTML = '';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 8; i < 32; i += 8) { // Start at the 8th entry and take every 8th entry (24 hours apart)
        const forecast = forecastData.list[i];
        const date = new Date(forecast.dt * 1000); // create Date object
        const options = { weekday: 'long' };
        const dayOfWeek = date.toLocaleDateString('en-US', options); // Get day of the week 
        const temp = forecast.main.temp;
        const icon = forecast.weather[0].icon;
        const description = forecast.weather[0].description;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
        <strong>${dayOfWeek}</strong>: ${temp}°F 
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
        <p>${description}</p>
    `;
        forecastElement.appendChild(forecastItem);
    }
}

getWeatherData();