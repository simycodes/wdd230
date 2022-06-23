const apiURL = "//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=metric";

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather_icon');
const windSpeed1 = document.querySelector('#wind-speed');
const condition = document.querySelector('#condition');


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console..
    console.log(weatherInfo);

    currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(0)}</strong>`;
    windSpeed1.innerHTML = weatherInfo.wind.speed;
    condition.innerHTML = weatherInfo.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
    console.log(iconsrc);

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', condition);

 }); //end of "then" fat arrow function



//  CALCULATING THE WIND CHILL

// The value obtained from the index page is a number String,its needs to be converted 
//into a Float, hence the parseFloat()
const temp = document.querySelector("#temperature").textContent;
const temperature = parseFloat(temp);

const windSpeed = parseFloat(document.querySelector("#wind-speed").textContent);

let windChill;

//since temperature is coming in celsius we use less 10 if F we use 50
if(temperature <= 10 && windSpeed > 3) {
    windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temperature * Math.pow(windSpeed,0.16))
    windChill = Math.round(windChill);
    document.querySelector("#wind-chill").textContent = windChill+"\xB0F";
    //document.querySelector("#wind-chill").textContent = windChill.toFixed(3);
}
else {
    windChill = "N/A";
    document.querySelector("#wind-chill").textContent = windChill;
}

