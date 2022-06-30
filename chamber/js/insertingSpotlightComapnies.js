//const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//const requestURL = '../json/companies.json';
const requestURL = 'https://simycodes.github.io/wdd230/chamber/json/companies.json';
const cards = document.querySelector('.cards');


fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const companies = jsonObject['companies'];
    //companies.forEach(displayCompanies);
    displaySpotlightCompanies(companies);
});


function  displaySpotlightCompanies(companies){
    let goldCompanies = [];
    let randomCompanyNumber = 0;
    let randomCompanyDisplay = "";

    console.log("Displayin companies inside displaySpotlightCompanies function");
    console.log(companies);
    console.log("Just consoled the companies above")

    for (let i = 0; i < companies.length; i++) {
        if(companies[i].membershiplevel === "Gold"){
            console.log("inside the for loop")
            console.log(companies[i].name);
            goldCompanies.push(companies[i]);
        }
    }

    console.log("Displaying Gold companies");
    console.log(goldCompanies);
    console.log("Just Displayed Gold companies");

    const headingSpotlightOne = document.getElementById("heading-spotlight-one");
    const imageSpotlightOne = document.getElementById("image-spotlight-one");
    const paragraphSpotlightOne = document.getElementById("paragraph-spotlight-one");

    const headingSpotlightTwo = document.getElementById("heading-spotlight-two");
    const imageSpotlightTwo = document.getElementById("image-spotlight-two");
    const paragraphSpotlightTwo = document.getElementById("paragraph-spotlight-two");

    //Displaying the first random company
    randomCompanyNumber = Math.floor(Math.random() * goldCompanies.length);
    randomCompanyDisplay = goldCompanies[randomCompanyNumber];

    console.log("Displaying a random gold company");
    console.log(randomCompanyDisplay.name);

    headingSpotlightOne.textContent = randomCompanyDisplay.name;
    paragraphSpotlightOne.textContent = randomCompanyDisplay.message;
    imageSpotlightOne.setAttribute('src', randomCompanyDisplay.image);
    imageSpotlightOne.setAttribute("alt",`Company logo image of ${randomCompanyDisplay.name}`);

    //Displaying second random company
    randomCompanyNumber = Math.floor(Math.random() * goldCompanies.length);
    randomCompanyDisplay = goldCompanies[randomCompanyNumber]

    console.log("Displaying a second random gold company");
    console.log(randomCompanyDisplay.name);

    headingSpotlightTwo.textContent = randomCompanyDisplay.name;
    paragraphSpotlightTwo.textContent = randomCompanyDisplay.message;
    imageSpotlightTwo.setAttribute('src', randomCompanyDisplay.image);
    imageSpotlightTwo.setAttribute("alt",`Company logo image of ${randomCompanyDisplay.name}`);
}

