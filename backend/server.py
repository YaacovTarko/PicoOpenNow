from flask import Flask, request
from enum import Enum

app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello World'

@app.route('/restaurants')
def get_restaurant_names():
	return "['Jeff\'s Gourmet', 'PKD', 'Shalom Pizza']"

class Weekday(Enum):
	sun = 1
	mon = 2
	tues = 3
	wed = 4
	thurs = 5
	fri = 6
	sat = 7

@app.route('/hours')
def get_hours():
	return {"Jeff's" : {"Monday" : }}
	return "['Jeff\'s Gourmet', 'PKD', 'Shalom Pizza']"

if __name__ == '__main__':
   app.run()