import json
import os
def lambda_handler(event, context):
    message = 'Hello, Good Evening!!' 
    return { 
        'message' : message
    }
