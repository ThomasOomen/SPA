from dotenv import load_dotenv
import os

class HomeController:
    def __init__(self):
        pass

    def greeting():
        return 'Hello & Welcome :)'
    
    def getUser():
        load_dotenv('backend\.env')
        return os.environ.get('APP_USERNAME')


