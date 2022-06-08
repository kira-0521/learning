from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def index():
  return { "message": "hello world" }

@app.get('/countries/{country_name}')
async def country(country_name: int):
  return { "country_name": country_name }

@app.get('/animals/')
async def country(name: str = 'dog', animal_no: int = 1):
  return { "name": name, "animal_no": animal_no }

