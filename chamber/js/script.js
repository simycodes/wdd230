//Code for the active nav bar
const activePage = window.location.pathname;
//console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach(link =>{
    console.log(link.href);
    if(link.href.includes(`${activePage}`)){
        //console.log(`$activePage`);
        link.classList.add("active");
    }
})


//code to for the toggle menu
function toggleMenu(){
	console.log("It worked!");
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("humburgerBtn").classList.toggle("open");
}

const x = document.getElementById("humburgerBtn");
x.onclick = () => toggleMenu();


/* start - JS code for the conditional display of a message using JS */
const today = new Date()
const dayNumber = today.getDay();
//console.log(dayNumber);

const messageHolderElement = document.getElementById("display-message");
if (dayNumber == 1 || dayNumber == 2) {
	document.getElementById("display-message").classList.add("show-me");
}
else {
	 document.getElementById("display-message").classList.add("hide-me")
}
