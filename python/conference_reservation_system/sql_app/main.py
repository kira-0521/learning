from typing import List
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from crud import get_users, get_rooms, get_bookings, create_user, create_room, create_booking
from schemas import User, Room, Booking, UserCreate, RoomCreate, BookingCreate
from models import Base
from database import SessionLocal, engine

# models.Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()


@app.get("/")
async def index():
  return {"message": "success"}

"""
Read
"""
@app.get("/users", response_model=List[User])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
  users = get_users(db, skip=skip, limit=limit)
  return users

@app.get("/rooms", response_model=List[Room])
async def read_rooms(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
  rooms = get_rooms(db, skip=skip, limit=limit)
  return rooms

@app.get("/bookings", response_model=List[Booking])
async def read_bookings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
  bookings = get_bookings(db, skip=skip, limit=limit)
  return bookings


"""
Create
"""
@app.post("/users", response_model=User)
async def create_users(user: UserCreate, db: Session = Depends(get_db)):
  return create_user(db=db, user=user)

@app.post("/rooms", response_model=Room)
async def create_rooms(room: RoomCreate, db: Session = Depends(get_db)):
  return create_room(db=db, room=room)

@app.post("/bookings", response_model=Booking)
async def create_bookings(booking: BookingCreate, db: Session = Depends(get_db)):
  return create_booking(db=db, booking=booking)
