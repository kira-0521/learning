import requests
import json

def main():
  url = 'http://127.0.0.1:8000/item/'
  body = {
    "name": "t-shirts",
      "price": 5980,
      "description": "this is a t-shirts",
      "tax": 1.1
  }
  res = requests.post(url, json.dumps(body))
  print(res.json())
  
def deploy_test():
  url = 'https://jci70z.deta.dev'
  body = {
    "x": 1.1,
    "y": 1.2
  }
  res = requests.post(url, json.dumps(body))
  print(res.json())

if __name__ == '__main__':
  deploy_test()