from tomlkit import value


scores = {
  '国語': 87, '数学': 86, '英語': 70, '理科': 73, '社会': 80
}

def calc_avg_subject(sub_scores):
  total_score = 0
  for sbj, score in sub_scores.items():
    if sbj in ['国語', '数学', '英語']:
      total_score += score
  return total_score / 3

calc_sbj_avg_result = calc_avg_subject(scores)
print(calc_sbj_avg_result)