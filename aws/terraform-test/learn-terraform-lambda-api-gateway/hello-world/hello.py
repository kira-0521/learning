import json

def lambda_handler(event: dict, context):
    print('event', event)
    
    response_message = 'Hello, World!'
    
    if event['queryStringParameters'] and event['queryStringParameters']['Name']:
      response_message = 'Hello, ' + event['queryStringParameters']['Name'] + '!'

    return {
      "statusCode": 200,
      "headers": {
        "Content-Type": "application/json",
      },
      "body": json.dumps({
        "message": response_message
      })
    }