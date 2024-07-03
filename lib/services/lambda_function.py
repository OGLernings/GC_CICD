import json
import os
def lambda_handler(event, context):
    message = 'Hello, Good night!!' 
    return { 
        'message' : message
    }
