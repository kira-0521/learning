from curses import echo
import sqlalchemy
import sqlalchemy.ext.declarative
import sqlalchemy.orm

engine = sqlalchemy.create_engine('mysql+pymysql://root:@localhost/test_mysql_database2', echo=True)

Base = sqlalchemy.ext.declarative.declarative_base()

class Person(Base):
  __tablename__ = 'persons'
  id = sqlalchemy.Column(
    sqlalchemy.Integer, primary_key=True, autoincrement=True)
  name = sqlalchemy.Column(sqlalchemy.String(14))

Base.metadata.create_all(engine)

Session = sqlalchemy.orm.sessionmaker(bind=engine)
session = Session()

person = Person(name='Mike')
session.add(person)
person2 = Person(name='Nancy')
session.add(person2)
person3 = Person(name='Bob')
session.add(person3)
session.commit()

p4 = session.query(Person).filter_by(name='Mike').first()
p4.name = 'Michel'
session.add(p4)
session.commit()


persons = session.query(Person).all()
for person in persons:
  print(person.id, person.name)
