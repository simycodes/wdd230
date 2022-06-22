//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=imperial";

//using zip code
// const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=5dc3e352a835ebf42d11b3813df14eb0&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById("place").innerHTML = weatherInfo.name;
	document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
	document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;
	
	//getting and displaying the image
	const iconcode = weatherInfo.weather[0].icon;
	console.log(iconcode);
	const icon_path = "//api.openweathermap.org/img/w/"+ iconcode +"png";
	console(icon_path);
	
	document.getElementById("weather_icon").src = icon_path;
	

 }); //end of "then" fat arrow function


// https://openweathermap.org/current
// Built-in API request by city ID
// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?id=901344

//use link like this to avoid cross reference erros showed by the browser,the browser will add the https it self
//api.openweathermap.org/data/2.5/weather?id=901344

//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0

//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=imperial

//api.openweathermap.org/img/w/04n.png  --the image name 04n is given out in json data and needs to be added
//dynamically,like below

//const icon_path = ""+ <icon code from json> +"";
//const icon_path = "api.openweathermap.org/img/w/"+ iconcode +"png";

// For temperature in Fahrenheit use units=imperial
// For temperature in Celsius use units=metric
// Temperature in Kelvin is used by default, no need to use units parameter in API call
