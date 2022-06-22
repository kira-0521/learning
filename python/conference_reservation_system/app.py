from sqlalchemy import column
import streamlit as st
import datetime
import random
import requests
import json
import pandas as pd

import config

# BASE_URL
base_url = config.BASE_URL
page = st.sidebar.selectbox('Choose your page', ['users', 'rooms', 'bookings'])

if page == 'users':
  st.title('ユーザー登録画面')

  with st.form(key='user'):
    username: str = st.text_input('ユーザー名', max_chars=12)
    data = {
      'username': username
    }
    submit_button = st.form_submit_button(label='送信')
    
  if submit_button:
    st.write('## レスポンス結果')
    url = f'{base_url}users'
    res = requests.post(url, data=json.dumps(data))
    if res.status_code == 200:
      st.success('ユーザー登録が完了しました。')
    st.json(res.json())

elif page == 'rooms':
  st.title('会議室登録')

  with st.form(key='room'):
    room_name: str = st.text_input('会議室名', max_chars=12)
    capacity: int = st.number_input('定員', step=1)

    data = {
      'room_name': room_name,
      'capacity': capacity,
    }
    submit_button = st.form_submit_button(label='送信')

  if submit_button:
    url = f'{base_url}rooms'
    res = requests.post(url, data=json.dumps(data))
    if res.status_code == 200:
      st.success('会議室登録完了')

    st.json(res.json())

elif page == 'bookings':
  st.title('会議室予約画面')

  """
  ユーザー一覧
  """
  url_users = f'{base_url}users'
  res = requests.get(url_users)
  users = res.json()
  users_name = {}
  for user in users:
    users_name[user['username']] = user['user_id']

  """
  会議室一覧
  """
  rooms = requests.get(f'{base_url}rooms').json()
  rooms_name = {}
  for room in rooms:
    rooms_name[room['room_name']] = {
      'room_id': room['room_id'],
      'capacity': room['capacity'],
    }

  st.write('### 会議室一覧')
  df_rooms = pd.DataFrame(rooms)
  df_rooms.columns = ['会議室名', '定員', '会議室ID']
  st.table(df_rooms)

  """
  予約一覧
  """
  bookings = requests.get(f'{base_url}bookings').json()
  df_bookings = pd.DataFrame(bookings)

  # テーブル対応表
  users_id = {}
  for user in users:
    users_id[user['user_id']] = user['username']
  rooms_id = {}
  for room in rooms:
    rooms_id[room['room_id']] = {
      'room_name': room['room_name'],
      'capacity': room['capacity'],
    }
  
  # idを元に各値に変換
  to_username = lambda id: users_id[id]
  to_room_name = lambda id: rooms_id[id]['room_name']
  to_date_time = lambda x: datetime.datetime.fromisoformat(x).strftime('%Y/%m/%d %H:%M')
  
  # 各カラムに関数適用
  df_bookings['user_id'] = df_bookings['user_id'].map(to_username)
  df_bookings['room_id'] = df_bookings['room_id'].map(to_room_name)
  df_bookings['start_datetime'] = df_bookings['start_datetime'].map(to_date_time)
  df_bookings['end_datetime'] = df_bookings['end_datetime'].map(to_date_time)
  
  # カラム名変更
  df_bookings = df_bookings.rename(columns={
    'user_id': '予約者名',
    'room_id': '会議室名',
    'booked_num': '予約人数',
    'start_datetime': '開始時刻',
    'end_datetime': '終了時刻',
    'booking_id': '予約番号',
  })

  # 予約一覧
  st.write('### 予約一覧')
  st.table(df_bookings)

  """
  FORM
  """
  with st.form(key='bookings'):
    username: str = st.selectbox('予約者名', users_name.keys())
    room_name: str = st.selectbox('会議室名', rooms_name.keys())
    booked_num: int = st.number_input('予約人数', step=1, min_value=1)
    date = st.date_input('日付を入力', min_value=datetime.date.today())
    start_time = st.time_input('開始時刻: ', value=datetime.time(hour=9, minute=0))
    end_time = st.time_input('終了時刻: ', value=datetime.time(hour=20, minute=0))

    submit_button = st.form_submit_button(label='送信')
  
  # SUBMIT
  if submit_button:
    user_id: int = users_name[username]
    room_id: int = rooms_name[room_name]['room_id']
    capacity: int = rooms_name[room_name]['capacity']
    
    # request_data
    data = {
      'user_id': user_id,
      'room_id': room_id,
      'booked_num': booked_num,
      'start_datetime': datetime.datetime(
        year=date.year,
        month=date.month,
        day=date.day,
        hour=start_time.hour,
        minute=start_time.minute,
      ).isoformat(),
      'end_datetime': datetime.datetime(
        year=date.year,
        month=date.month,
        day=date.day,
        hour=end_time.hour,
        minute=end_time.minute,
      ).isoformat()
    }

    # 定員バリデーション
    if booked_num > capacity:
      st.error(f'{room_name}の定員は、{capacity}名です。')
    # 時間バリデーション
    elif start_time >= end_time:
      st.error('開始時刻が終了時刻を越えております。')
    elif start_time < datetime.time(hour=9, minute=0, second=9) or end_time > datetime.time(hour=20, minute=0, second=9):
      st.error('予約時間は9:00~20:00までとなっております。')
    else:
      url = f'{base_url}bookings'
      res = requests.post(url, data=json.dumps(data))
      if res.status_code == 200:
        st.success('予約完了しました。')


