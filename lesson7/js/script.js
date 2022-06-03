//Getting all the all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//Setting an optional parameter for the intersectionalObserver
const imgOptions = {
	threshold: 0.2 ,  //change to 1 to see the difference the images hold
	rootMargin: "0px 0px -100px 0px"
};

//Function manipulating the data-src of each image
const loadImages = (image) => {
	image.setAttribute("src", image.getAttribute("data-src"));
	image.onload = () => {
		image.removeAttribute("data-src");
	};
};

//Checking to see if IntersectionObserver is supported,then load the images
if("IntersectionObserver" in window) {
	const imgObserver = new IntersectionObserver((items, observer) =>{
		items.forEach(item => {
		if(item.isIntersecting){
			item.target.src = item.target.dataset.src;
			item.target.removeAttribute('data-src');
			imgObserver.unobserve(item.target);
		}
		});
	}, imgOptions);
	
	//loop through each img and check status and load if necessary
	imagesToLoad.forEach((img) => {
		imgObserver.observe(img);
	});
}
else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}
//just load all images if not supported