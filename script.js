async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(`Weather in ${city}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

// Example usage:
getWeather('London');
// Example usage without API:
const weatherData = {
    'London': { description: 'light rain', temp: 15 },
    'New York': { description: 'clear sky', temp: 22 },
    'Tokyo': { description: 'scattered clouds', temp: 18 }
};

function getWeatherWithoutAPI(city) {
    const data = weatherData[city];
    if (data) {
        console.log(`Weather in ${city}: ${data.description}, Temperature: ${data.temp}°C`);
    } else {
        console.error('City not found');
    }
}
let f_name= prompt("Enter your  first name");
if (f_name!=null){
    alert("Hello"+f_name+"! Welcome to our website"); 
} else{
    alert("Too bad for you");
}
// Example usage:
getWeatherWithoutAPI('London');