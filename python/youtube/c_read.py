import pandas as pd

df_name = pd.read_csv('./data/名前.csv')
df_job = pd.read_csv('./data/職業.csv')

df = pd.merge(df_name, df_job)
df.to_csv('名前_職業.csv', index=False)