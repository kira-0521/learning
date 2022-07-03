import mysql.connector

conn = mysql.connector.connect(host='127.0.0.1', user='root', database='test_mysql_database')

cursor = conn.cursor()

cursor.execute('CREATE TABLE persons(id int NOT NULL AUTO_INCREMENT, name varchar(14) NOT NULL, PRIMARY KEY(id))')

cursor.close()
conn.close()

