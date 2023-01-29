from flask import Flask, request
from flask_cors import CORS

# from controllers.
from controllers.HomeController import *
from controllers.ExpensesController import *
from controllers.StravaController import *


app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resources={r"/*": {'origins': "*"}})


@app.route('/greeting', methods=['GET'])
def greeting():
    return HomeController.greeting()

@app.route('/get/username', methods=['GET'])
def getUsername():
    return HomeController.getUser()

@app.route('/get/athlete', methods=['GET'])
def getAthlete():
    return StravaController.getStravaAthlete()

@app.route('/get/ride/map', methods=['GET'])
def getMap():
    mapPolyLine = request.args
    return StravaController.getMap(mapPolyLine['polyline'], mapPolyLine['startingLocationLat'], mapPolyLine['startingLocationLon'])

@app.route('/get/all/activities', methods=['GET'])
def getAllActivities():
    stravaController = StravaController()
    allActivities = stravaController.getActivities()
    totalDistance = stravaController.calculateTotalDistance(allActivities) 
    rideTypes = stravaController.getActivityTypes(allActivities)

    result = {
        'allActivities': allActivities,
        'totalDistance': totalDistance,
        'rideTypes': rideTypes,
    }

    return result

if __name__ == "__main__":
    app.run(debug=True)
