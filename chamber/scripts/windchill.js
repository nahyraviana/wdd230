/*jshint esversion: 7 */

let temp = document.getElementById("temp");
temp.innerHTML = 30;
temp = parseInt(temp.textContent);

let speed = document.getElementById("speed");
speed.innerHTML = 4.5;
speed = parseInt(speed.textContent);

let windChill = document.getElementById("chill");

if (temp >= 50){
    windChill = N/A;
}
else if (speed < 3) {
     windChill = N/A;
}
else{
windChill =Math.round(35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16));
chill.innerHTML = windChill;
}

