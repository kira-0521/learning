from sqlalchemy.orm import Session
from models import User as UserModel, Room as RoomModel, Booking as BookingModel
from schemas import User as UserSchema, Room as RoomSchema, Booking as BookingSchema

"""
ユーザー一覧取得
"""
def get_users(db: Session, skip: int = 0, limit: int = 100):
  return db.query(UserModel).offset(skip).limit(limit).all()

"""
会議室一覧取得
"""
def get_rooms(db: Session, skip: int = 0, limit: int = 100):
  return db.query(RoomModel).offset(skip).limit(limit).all()

"""
予約一覧取得
"""
def get_bookings(db: Session, skip: int = 0, limit: int = 100):
  return db.query(BookingModel).offset(skip).limit(limit).all()


"""
ユーザー登録
"""
def create_user(db: Session, user: UserSchema):
  db_user = UserModel(username=user.username)
  db.add(db_user)
  db.commit()
  db.refresh(db_user)
  return db_user

"""
会議室登録
"""
def create_room(db: Session, room: RoomSchema):
  db_room = RoomModel(room_name=room.room_name, capacity=room.capacity)
  db.add(db_room)
  db.commit()
  db.refresh(db_room)
  return db_room

"""
予約登録
"""
def create_booking(db: Session, booking: BookingSchema):
  db_booking = BookingModel(
    user_id = booking.user_id,
    room_id = booking.room_id,
    booked_num = booking.booked_num,
    start_datetime = booking.start_datetime,
    end_datetime = booking.end_datetime,
  )
  db.add(db_booking)
  db.commit()
  db.refresh(db_booking)
  return db_booking

