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
	const minPixHeight = 0;
	const maxPixWidth = picoImage.width;
	const minPixWidth = 0;

	if(isReady){
		for (const restaurant of Object.keys(places_and_times)){
			console.log(restaurant);
			console.log(places_and_times[restaurant])

			const day = today.getDay();
			console.log(day);

		}
	}
}