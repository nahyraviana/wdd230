/*jshint esversion: 7 */

let currentTemp = document.getElementById("temp");
let windSpeed = document.getElementById("speed");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.getElementById("weather-sun");
let windChill = document.getElementById("chill");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.760780&lon=-111.891045&units=imperial&appid=72c4ed5f83039f3afa3968069102cd0e';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windSpeedData = weatherData.wind.speed;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    windSpeed.innerHTML = windSpeedData;

    let temperature = weatherData.main.temp;
    if (temperature <= 10 && windSpeedData > 4.83) {
        const windChillMath =
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeedData, 0.16) +
            0.3965 * temperature * Math.pow(windSpeedData, 0.16);
        windChill.innerHTML = `${Math.round(
            windChillMath
        )}°F`;
    } else {
        windChill.innerHTML = "N/A";
    }
}
/*if (currentTemp >= 20 && windSpeed <3){
    windChill = "N/A";
}
else{
windChill =Math.round(35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16));
chill.innerHTML = windChill;
}

*/