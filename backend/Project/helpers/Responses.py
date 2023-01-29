from flask_api import status
from flask import jsonify


class Response:
    def __init__(self):
        pass

    def getFailedResponse(message):
        return jsonify(
            status=status.HTTP_400_BAD_REQUEST,
            message=message,
        )

    def getSuccesfullResponse(message, data):
        return {
            'status': status.HTTP_200_OK,
            'message': message,
            'data': data
        }
