import boto3
import os

REGION = os.environ.get('region')
USER_POOL_ID = os.environ.get('user_pool_id')


cognito = boto3.client('cognito-idp', REGION)


"""
Cognitoステータス変更
"""
def change_cognito_status(username: str, to_status) -> bool:
    is_success = True

    if to_status == 'enable':
        try:
            cognito.admin_enable_user(
                UserPoolId=USER_POOL_ID,
                Username=username
            )
        except Exception as e:
            print('Error: ', e)
            is_success = False

    if to_status == 'disable':
        try:
            cognito.admin_disable_user(
                UserPoolId=USER_POOL_ID,
                Username=username
            )
        except Exception as e:
            print('Error: ', e)
            is_success = False

    else:
        is_success = False

    return is_success

"""
Cognitoユーザー情報取得
"""
def get_cognito_user(username: str):
    result = {
        'status': None,
        'username': ''
    }

    try:
        # ユーザー取得
        cognito_user = cognito.list_users(
            UserPoolId=USER_POOL_ID,
            Filter=f'username = \"{username}\"'
        ).get('Users')[0]

        # レスポンスにユーザーセット
        result['username'] = cognito_user['Username']
        result['status'] = 'enable' if cognito_user['Enabled'] else 'disable'

    except Exception as e:
        print('Error: ', e)

    finally:
        return result

"""
ハンドラー
"""
def lambda_handler(event, context):
    # リクエストボディ
    request_body = event
    is_to_valid = request_body["is_to_valid"]
    users = request_body["users"]

    # 処理が成功したか
    is_success = True

    # 無効 -> 有効
    if is_to_valid:
        for username in users:
            # ステータス変更
            is_success = change_cognito_status(username=username, to_status='enable')

    # 有効 -> 無効
    else:
        for username in users:
            # ユーザー情報取得
            cognito_user = get_cognito_user(username=username)

            if cognito_user['status'] == 'enable':
                # ステータス変更
                is_success = change_cognito_status(username=cognito_user['username'], to_status='disable')
            else:
                is_success = False

    return {
        "statusCode": 200,
        "is_success": is_success
    }
