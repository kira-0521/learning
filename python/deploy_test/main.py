from fastapi import FastAPI
from pydantic import BaseModel

class Data(BaseModel):
  x: float
  y: float
  
app = FastAPI()

@app.get('/')
def index():
  return {"message": "Hello, world!"}

@app.post('/')
def calc(data: Data):
  return data.x*data.y
