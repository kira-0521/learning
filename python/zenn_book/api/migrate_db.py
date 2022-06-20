from sqlalchemy import create_engine

from api.models.task import BaseModel

DB_URL = "mysql+pymysql://root@db:3306/demo?charset=utf8"
engine = create_engine(DB_URL, echo=True)

def reset_databases():
  BaseModel.metadata.drop_all(bind=engine)
  BaseModel.metadata.create_all(bind=engine)
  
  
if __name__ == '__main__':
  reset_databases()
  