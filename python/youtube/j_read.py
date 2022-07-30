import json

with open('./data/book_data.json', encoding='utf-8') as f:
  book_data = f.read()

book_json = json.loads(book_data)
items = book_json['@graph'][0]['items']
for item in items:
  print(item['title'])