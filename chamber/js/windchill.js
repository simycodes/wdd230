
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

