from turtle import back
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from api.db import BaseModel

class Task(BaseModel):
  __tablename__ = 'tasks'
  
  id = Column(Integer, primary_key=True)
  title = Column(String(1024))
  
  done = relationship("Done", back_populates="task")
  
class Done(BaseModel):
  __tablename__ = "dones"
  
  id = Column(Integer, ForeignKey("tasks.id"), primary_key=True)
  
  task = relationship("Tasks", back_populates="done")
  
  
