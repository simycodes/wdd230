//const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//const requestURL = '../json/companies.json';
const requestURL = 'https://simycodes.github.io/wdd230/chamber/json/companies.json';
const cards = document.querySelector('.cards');


fetch(requestURL).then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
    //prophets.forEach(displayProphets);
});



function displayCompanies(company) {

  //Setting spotlight information for 2 gold companies
  if(company.membershiplevel === "Gold" && company.name === "Ndola Chamber of Commerce") {
    const headingSpotlightOne = document.getElementById("heading-spotlight-one");
    const imageSpotlightOne = document.getElementById("image-spotlight-one");
    const paragraphSpotlightOne = document.getElementById("paragraph-spotlight-one");

    imageSpotlightOne.setAttribute('src', company.image);
    imageSpotlightOne.setAttribute("alt",`Company logo image of ${company.name}`);
  }

  if(company.membershiplevel === "Gold" && company.name === "Mwaiseni Maisonettes") {
    const headingSpotlightTwo = document.getElementById("heading-spotlight-two");
    const imageSpotlightTwo = document.getElementById("image-spotlight-two");
    const paragraphSpotlightTwo = document.getElementById("paragraph-spotlight-two");

    imageSpotlightTwo.setAttribute('src', company.image);
    imageSpotlightTwo.setAttribute("alt",`Company logo image of ${company.name}`);
  }

}


// function displayCompanySpotLights(company) {
//   const headingSpotlightOne = document.getElementById("heading-spotlight-one");
//   const imageSpotlightOne = document.getElementById("image-spotlight-one");
//   const paragraphSpotlightOne = document.getElementById("paragraph-spotlight-one");

//   imageSpotlightOne.setAttribute('src', company.image);
//   imageSpotlightOne.setAttribute("alt",`Company logo image of ${company.name}`);

//   const headingSpotlightTwo = document.getElementById("heading-spotlight-two");
//   const imageSpotlightTwo = document.getElementById("image-spotlight-two");
//   const paragraphSpotlightTwo = document.getElementById("paragraph-spotlight-two");

//   imageSpotlightTwo.setAttribute('src', company.image);
//   imageSpotlightTwo.setAttribute("alt",`Company logo image of ${company.name}`);

// }



 //Setting spotlight information for 2 gold companies
  // if(company.membershiplevel === "Gold" && company.name === "Zamtel") {
  //   const headingSpotlightOne = document.getElementById("heading-spotlight-one");
  //   const imageSpotlightOne = document.getElementById("image-spotlight-one");
  //   const paragraphSpotlightOne = document.getElementById("paragraph-spotlight-one");

  //   imageSpotlightOne.setAttribute('src', company.image);
  //   imageSpotlightOne.setAttribute("alt",`Company logo image of ${company.name}`);

  //   const headingSpotlightTwo = document.getElementById("heading-spotlight-two");
  //   const imageSpotlightTwo = document.getElementById("image-spotlight-two");
  //   const paragraphSpotlightTwo = document.getElementById("paragraph-spotlight-two");

  //   imageSpotlightTwo.setAttribute('src', company.image);
  //   imageSpotlightTwo.setAttribute("alt",`Company logo image of ${company.name}`);
  // }