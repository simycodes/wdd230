const apiURL = "//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=metric";


const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#wind-speed');
const condition = document.querySelector('#condition');


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = weatherInfo.wind.speed;
    condition.innerHTML = weatherInfo.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
    console.log(iconsrc);

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', condition);

 }); //end of "then" fat arrow function



// const apiURL = "//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=metric";

// //Go fetch it and then wait for a response.
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((weatherInfo) => {
//     //Once it comes back, display it to the console.
//     console.log(weatherInfo);
    
//     document.getElementById("condition").innerHTML = weatherInfo.weather[0].description;
// 	document.getElementById("temperature").innerHTML = weatherInfo.main.temp;
// 	document.getElementById("wind-speed").innerHTML = weatherInfo.wind.speed;

//     const weatherImage = document.getElementById("weather-icon");
	
// 	//getting and displaying the image
// 	const iconcode = weatherInfo.weather[0].icon;
// 	console.log(iconcode);
// 	const icon_path = "//api.openweathermap.org/img/w/"+ iconcode +".png";
// 	console.log(icon_path);

//     weatherImage.src = icon_path;
//     weatherImage.alt = document.getElementById("condition").innerHTML = weatherInfo.weather[0].description;
// 	// document.getElementById("weather-icon").src = icon_path;
	
//  }); //end of "then" fat arrow function


