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
    companies.forEach(displayCompanySpotLights)
});



function displayCompanies(company) {
  // Create the main element to add to the document
  let card = document.createElement('section');

  //creation of companyLogo, address ,phone number and companyurl elements
  let companyName = document.createElement('h4')
  let companyLogo = document.createElement('img');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');

  let url = document.createElement('a');
  let imageUrl = document.createElement('a');
  let companyUrl = document.createElement('p');

  companyLogo.setAttribute('src', company.image);
  companyLogo.setAttribute("alt",`Company logo image of ${company.name}`);
  companyLogo.setAttribute('loading', 'lazy');

  url.textContent = `${company.websiteurl}`;
  url.setAttribute('href', company.websiteurl);
  url.setAttribute('target', '_blank');
  companyUrl.appendChild(url);

  imageUrl.setAttribute('href', company.websiteurl);
  imageUrl.setAttribute('target', '_blank');
  imageUrl.appendChild(companyLogo);

  companyName.textContent = `${company.name}`;
  address.textContent = `${company.address}`;
  phoneNumber.textContent = `${company.number}`;
  //companyUrl.textContent = `${company.websiteurl}`;

 
// const a = document.querySelector(cards);
//   if(a.classList == "cards"){
//        address.classList.add("bottom-margin");
//   }

   // Add/append the section(card) with all company elements
  card.appendChild(imageUrl); //imageURL contains an image inside it,that is displayed
  card.appendChild(companyName);
  card.appendChild(address)
  card.appendChild(phoneNumber);
  card.appendChild(companyUrl);

  // card.appendChild(companyLogo);
  // card.appendChild(companyName);
  // card.appendChild(address)
  // card.appendChild(phoneNumber);
  // card.appendChild(companyUrl);



  // Add/append the the card element(section) to the div element having the class named cards
  document.querySelector('div.cards').appendChild(card);

}



 //Setting spotlight information for 2 gold companies
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




