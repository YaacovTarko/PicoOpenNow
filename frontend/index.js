// this variable will be set to true when we have location and 
let isReady = false;
let places_and_times = {}


// change this url when we launch
const url = "http://localhost:5000/hours";
fetch(url).then(function(response){
	return response.json();
}).then(function(json){
	places_and_times = json;
	isReady=true;
	render();
});


// call this function every time the page resizes
function render() {
	const maxLatitude = 34.058870;
	const minLatitude = 34.051111;
	const maxLongitude =  -118.375938;
	const minLongitude = -118.403798;

	const picoImage = document.getElementById('picoPicture');

	const maxPixHeight = picoImage.height;
	const maxPixWidth = picoImage.width;

	if(isReady) {
			const day = new Date();
			const dayOfWeek = day.getDay();
			console.log(dayOfWeek);

			const hour = day.getHours();
			console.log(hour);
			const minutes = day.getMinutes();
			console.log(minutes);

		for (const restaurant of Object.keys(places_and_times)) {

			for (const eachDay of places_and_times[restaurant]['Hours']) {
				// todo: use date info to decide whether restaraunt is open or closed, and visualize it that way
				// console.log(eachDay) 
			}

			// plots points on image based on GPS location
			console.log(places_and_times[restaurant].gps);
			const gps = places_and_times[restaurant].gps
			// values between 0 and 1 that indicate where on the pico image the dot should be
			relativeY = (gps.lat - maxLatitude) / (minLatitude - maxLatitude);
			relativeX = (gps.lng - maxLongitude) / (minLongitude - maxLongitude);
			// values between 0 and maxPixHeight/Width which indicate the pixel the dot should be centered on 
			// imageXPos = relativeX * maxPixWidth;
			// imageYPos = relativeY * maxPixHeight;
			console.log(relativeX, relativeY, restaurant)
		}
	}
}