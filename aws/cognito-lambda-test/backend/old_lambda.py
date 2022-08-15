import boto3
import os

# TODO: 環境変数
REGION = os.environ.get('region')
USER_POOL_ID = os.environ.get('user_pool_id')


cognito = boto3.client('cognito-idp', REGION)


def lambda_handler(event):
    request_data = event
    is_to_valid = request_data['is_to_valid']
    users = request_data['users']
    
    is_success = True
    # 無効 -> 有効
    if is_to_valid:
        print('if')
        for username in users:
            try:
                cognito.admin_enable_user(
                    UserPoolId=USER_POOL_ID,
                    Username=username
                )
            except Exception as e:
                is_success = False
                print(e)
    
    else:
        print('else')
        for username in users:
            try:
                cognito_user = cognito.list_users(
                    UserPoolId=USER_POOL_ID,
                    Filter=f'username = \"{username}\"'
                ).get('Users')[0]
                print('cognito_user', cognito_user)
                if cognito_user['Enabled']:
                    try:
                        cognito.admin_disable_user(
                            UserPoolId=USER_POOL_ID,
                            Username=cognito_user['Username']
                        )
                    except Exception as e:
                        is_success = False
                        print(e)
            except Exception as e:
                is_success = False
                print(e)

    return {
        "statusCode": 200,
        "is_success": is_success
    }
