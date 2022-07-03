import sqlite3

conn = sqlite3.connect('test_sqlite.db')

curs = conn.cursor()
# curs.execute(
#   'CREATE TABLE persons(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING)')

# curs.execute('INSERT INTO persons(name) values("Betty")')
# curs.execute('INSERT INTO persons(name) values("Bob")')
# curs.execute('INSERT INTO persons(name) values("Johny")')
# curs.execute('INSERT INTO persons(name) values("Jack")')

curs.execute('SELECT * FROM persons')
print(curs.fetchall())
# conn.commit()

curs.close()
conn.close()

