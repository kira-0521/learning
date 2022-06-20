from optparse import Option
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
  name: str
  price: int
  description: Optional[str]
  tax: Optional[float]

app = FastAPI()

@app.post("/item/")
async def create_item(item: Item):
  return {"message" : f"{item.name}は税込み価格{int(item.price*item.tax)}円です。"}


