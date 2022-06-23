const apiURL = "//api.openweathermap.org/data/2.5/weather?id=901344&appid=5dc3e352a835ebf42d11b3813df14eb0&units=metric";


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById("condition").innerHTML = weatherInfo.weather[0].description;
	document.getElementById("temperature").innerHTML = weatherInfo.main.temp;
	document.getElementById("wind-speed").innerHTML = weatherInfo.wind.speed;

    const weatherImage = document.getElementById("weather-icon");
	
	//getting and displaying the image
	const iconcode = weatherInfo.weather[0].icon;
	console.log(iconcode);
	const icon_path = "//api.openweathermap.org/img/w/"+ iconcode +".png";
	console.log(icon_path);

    weatherImage.src = icon_path;
    document.getElementById("weather-icon").src = icon_path;
    //weatherImage.alt = document.getElementById("condition").innerHTML = weatherInfo.weather[0].description;
	// document.getElementById("weather-icon").src = icon_path;
	
 }); 


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

