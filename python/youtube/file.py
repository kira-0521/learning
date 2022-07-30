from pathlib import Path

data_path = './data'
txt_files = list(Path(data_path).glob('*.txt'))

def read_numbers(file):
  with open(file) as f:
    numbers = set([x.strip() for x in f.readlines()])
  return numbers

duplicate_num = read_numbers(txt_files[0])
for file in txt_files[1:]:
  numbers = read_numbers(file)
  duplicate_num = duplicate_num & numbers
  
for num in duplicate_num:
  print(num)