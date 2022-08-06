import dbm

with dbm.open('cache', 'c') as db:
  db['key1'] = 'value1'
  db['key2'] = 'value2'