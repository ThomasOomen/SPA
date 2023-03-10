import os
import requests
from dotenv import load_dotenv
from flask_api import status
from flask import Flask, jsonify
import helpers.Responses
import helpers.Map
import helpers.Chart
import numpy as np
from datetime import timedelta


class StravaController:
    def __init__(self):
        pass

    def getStravaAthlete():
        try:
            load_dotenv('backend\.env')
            Headers = {'Authorization': 'Bearer ' +
                os.environ.get('ACCESS_TOKEN')}
            response = requests.get(
                'https://www.strava.com/api/v3/athlete', headers=Headers).json()
            return helpers.Responses.Response.getSuccesfullResponse('Athlete retrieved succesfully', response)
        except:
            return helpers.Responses.Response.getFailedResponse('failed to receive athlete')

    def getStravaAthletestats(athleteId):
        try:
            athleteId = athleteId['athleteId']
            print(athleteId)
            load_dotenv('backend\.env')
            Headers = {'Authorization': 'Bearer ' +
                os.environ.get('ACCESS_TOKEN')}
            response = requests.get(
                'https://www.strava.com/api/v3/athletes/' + athleteId + '/stats', headers=Headers).json()
            print(response)
            return helpers.Responses.Response.getSuccesfullResponse('Activities retrieved succesfully', response)
        except:
            return helpers.Responses.Response.getFailedResponse('failed to receive activities')

    def getActivities(self):
        try:
            load_dotenv('backend\.env')
            Headers = {'Authorization': 'Bearer ' +
                os.environ.get('ACCESS_TOKEN')}
            response = requests.get(
                'https://www.strava.com/api/v3/athlete/activities', headers=Headers).json()
            return helpers.Responses.Response.getSuccesfullResponse('Activities retrieved succesfully', response)
        except:
            return helpers.Responses.Response.getFailedResponse('failed to receive activities')

    def getNewAccessToken():
        try:
            response = requests.get()
            return ''
        except:
            return helpers.Responses.Response.getFailedResponse('Failed to get new access token')

    # get new access token when access token is expired. Save new access token to .env

    def reAuthorize():
        print('reauth')
        return ''

    def calculateTotalDistance(self, allActivities):
        rideDistance = np.array([])
        for activity in allActivities['data']:
            rideDistance = np.append(rideDistance, activity['distance']/1000)

        return float(format(np.sum(rideDistance), '.2f'))

    def getTotalRideTime(self, allActivities):
        totalTimeSpend = np.array([])
        for activity in allActivities['data']:
            totalTimeSpend = np.append(totalTimeSpend, activity['elapsed_time'])

        totalTimeSpend = np.sum(totalTimeSpend)
        totalTimeSpend = timedelta(seconds=totalTimeSpend)
        return str(totalTimeSpend)

    def getAverageSpeed(self, allActivities):
        averageSpeed = np.array([])
        for activity in allActivities['data']:
            averageSpeed = np.append(averageSpeed, activity['average_speed'])

        averageSpeed = np.average(averageSpeed)
        return float(format(np.sum(averageSpeed), '.2f'))

    def getActivityTypes(self, allActivities):
        countRides = 0
        countWalks = 0
        for activity in allActivities['data']:
            if activity['type'] == "Ride":
                countRides += 1
            elif activity['type'] == 'Walk':
                countWalks += 1

        return {
            'rides': countRides,
            'walks': countWalks
        }

    def getMap(mapPolyLine, lat, long):
        result = helpers.Map.Map.drawMap(mapPolyLine, lat, long)
        iframe = result.get_root()._repr_html_()
        return iframe

    def getChart(activityId):
        try:
            load_dotenv('backend\.env')
            Headers = {'Authorization': 'Bearer ' + os.environ.get('ACCESS_TOKEN')}
            response = requests.get('https://www.strava.com/api/v3/activities/'+ activityId['id'] + '/streams?keys=time,altitude,velocity_smooth,grade_smooth&key_by_type=true&resolution=low', headers=Headers).json()
            return helpers.Responses.Response.getSuccesfullResponse('Stream retrieved succesfully', response)
        except:
            return helpers.Responses.Response.getFailedResponse('failed to receive stream')


