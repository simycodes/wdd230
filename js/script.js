const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();
const dayName = dayNames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

//const fullDate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
// const fullDate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

//Year only
const currentYear = `${year}`;
document.querySelector("#currentYear").textContent = currentYear;


//last update code
document.querySelector("#lastUpdate").textContent = document.lastModified;