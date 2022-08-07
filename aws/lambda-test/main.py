import boto3
import json
from collections import OrderedDict


def handler(event, context):
    BUCKET_NAME = event['bucket_name']
    BUCKET_KEY = event['bucket_key']
    UPLOAD_BUCKET_KEY = 'b.json'

    # a.json読み込み
    s3 = boto3.client('s3')
    obj = s3.get_object(Bucket=BUCKET_NAME, key=BUCKET_KEY)
    data = json.loads(obj['Body'].read().decode('utf-8'))
    print(f'{BUCKET_KEY}の内容： {data}')

    # b.json upload
    s3 = boto3.resource('s3')
    obj = s3.Bucket(BUCKET_NAME).Object(UPLOAD_BUCKET_KEY)
    data = OrderedDict(file_name=UPLOAD_BUCKET_KEY,
                       author=data['author'], age=(data['age'] + 1))

    res = obj.put(Body=json.dumps[data])
    if res['ResponseMetadata']['HTTPStatusCode'] == 200:
        print(f'[SUCCESS] upload {UPLOAD_BUCKET_KEY}')
