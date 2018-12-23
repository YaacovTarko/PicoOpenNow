from flask import Flask, request, send_from_directory
import googlemaps
import json

app = Flask(__name__, static_url_path="/frontend/")

with open('config/apikey.txt', 'r') as apiKeyFile:
  apikey = apiKeyFile.read()

#load restaurant names from file where they're stored
with open('config/restaurantNames.json', 'r') as nameFile:
	#names is a dict containing "restaurants" : ["r1", "r2", "r3"]
	names = json.load(nameFile)

gmaps = googlemaps.Client(key=apikey)

#look up each restaurant in the google places API and store its hours
open_hours = {}
for restaurant_name in names["restaurants"]:
	#place_info = gmaps.find_place(input=[restaurant_name], input_type="textquery", fields=["opening_hours", "formatted_address"])
	search_results = gmaps.find_place(input=[restaurant_name], input_type="textquery", location_bias="point:34.054831,-118.383854", fields=["place_id"])["candidates"]
	if len(search_results) == 0:
		print "Error: No results found for " + restaurant_name
	else:
		if len(search_results) > 1:
			print "Warning: Multiple results found for " + restaurant_name + ". Going with most probable result"
			print search_results
		place_id = search_results[0]["place_id"]
		# weekday_text results in this output format, if you want to change the format use a different one
		hours_for_place = gmaps.place(place_id=place_id, fields=["opening_hours"])["result"]["opening_hours"]["weekday_text"]
		open_hours[restaurant_name] = hours_for_place

print open_hours

@app.route('/')
def index():
   return 'Hello World'

@app.route('/restaurants')
def get_restaurant_names():
	return json.dumps(names)

@app.route('/hours')
def get_hours():
	return json.dumps(open_hours)

if __name__ == '__main__':
   app.run()