//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=metric";

//using zip code
// const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=5dc3e352a835ebf42d11b3813df14eb0&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById("condition").innerHTML = weatherInfo.weather[0].description;
	document.getElementById("temperature").innerHTML = weatherInfo.main.temp;
	document.getElementById("wind-speed").innerHTML = weatherInfo.wind.speed;
	
	//getting and displaying the image
	const iconcode = weatherInfo.weather[0].icon;
	console.log(iconcode);
	const icon_path = "//api.openweathermap.org/img/w/"+ iconcode +".png";
	console.log(icon_path);
    
	document.getElementById("weather-icon").src = icon_path;
	
 }); //end of "then" fat arrow function


