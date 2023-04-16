
/*jshint esversion: 7 */
let currentTemp = document.getElementById("temp");
let windSpeed = document.getElementById("speed");
const weatherIcon = document.getElementById("weather-icon");    
const captionDesc = document.getElementById("weather-sun");
let windChill = document.getElementById("chill");
let humidity = document.getElementById("humidity")

const url = "http://api.openweathermap.org/data/2.5/weather?&lat=40.760780&lon=-111.891045&units=imperial&appid=a206022f29e36d365cde3e10dbb4970f";

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

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windSpeedData = weatherData.wind.speed;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    windSpeed.innerHTML = windSpeedData;
    let humidityData = weatherData.main.humidity;
    humidity.innerHTML = humidityData;

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



fetchForecast = function () {
	var endpoint =
		"https://api.openweathermap.org/data/2.5/onecall?lat=40.760780&lon=-111.891045&units=imperial&exclude=hourly,minutely&&appid=a206022f29e36d365cde3e10dbb4970f";
	var forecastEl = document.getElementsByClassName("forecast");

	fetch(endpoint)
	.then(function (response) {
		if (200 !== response.status) {
			console.log(
				"Looks like there was a problem. Status Code: " + response.status
			);
			return;
		}

		forecastEl[0].classList.add('loaded');

		response.json().then(function (data) {

			var fday = "";
			data.daily.forEach((value, index) => {
                if (index > 0 && index < 4)
                {
                    var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                        weekday: "long",
                    });
                    /*var icon = value.weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
                    var iconDesc = value.weather[0].description;
                    <p><span class="ico-${icon}" title="${icon}" alt"${iconDesc}" src"${iconurl}"></span></p>*/

					var temp = value.temp.day.toFixed(0);
					fday = `<div class="forecast-day">
						<p>${dayname}</p>
						<div class="forecast-day--temp">${temp}<sup>°F</sup></div>
					</div>`;
					forecastEl[0].insertAdjacentHTML('beforeend', fday);
				}
			});
		});
	})
	.catch(function (err) {
		console.log("Fetch Error :-S", err);
	});
};

fetchForecast()

