from re import I
from typing import Optional, List
from fastapi import FastAPI
from pydantic import BaseModel, Field

class ShopInfo(BaseModel):
  name: str
  location: str

class Item(BaseModel):
  name: str  = Field(min_length=4, max_length=12)
  price: int
  description: Optional[str]
  tax: Optional[float]

class Data(BaseModel):
  shop_info: ShopInfo
  items: List[Item]

app = FastAPI()

@app.post("/")
async def index(data: Data):
  return {"data": data}


