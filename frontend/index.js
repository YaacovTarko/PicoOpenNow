// this variable will be set to true when we have location and 
let isReady = false;
let places_and_times = {}


// change this url when we launch
const url = "http://localhost:5000/hours";
fetch(url).then(function(response){
	return response.json();
}).then(function(json){
	places_and_times = json;
	render();
});


// call this function every time the page resizes
function render() {
	const maxLatitude = null;
	const minLatitude = null;
	const maxLongitude = null;
	const minLongitude = null;

}