data "aws_subnet" "apigw" {
  filter {
    name   = "tag:Name"
    values = [var.subnet_name]
  }
}

data "aws_vpc" "vpc" {
  filter {
    name   = "tag:Name"
    values = [var.vpc_name]
  }
}

data "aws_security_group" "apigw" {
  name   = var.secgroup_name
  vpc_id = data.aws_vpc.vpc.id
}

resource "aws_apigatewayv2_api" "Test_API" {
  name                         = "Test_API"
  protocol_type                = "HTTP"
  disable_execute_api_endpoint = true

  cors_configuration {
    # TODO: 書き換え
    allow_headers = ["*"]
    allow_methods = ["GET", "POST", "PUT", "DELETE"]
    # TODO: 書き換え
    allow_origins = ["*"]
  }
}

resource "aws_apigatewayv2_stage" "Test_API_st" {
  api_id      = aws_apigatewayv2_api.Test_API.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "Test_API_http" {
  api_id             = aws_apigatewayv2_api.Test_API.id
  integration_type   = "HTTP_PROXY"
  integration_method = "ANY"
  # TODO: 書き換え
  integration_uri = "${var.uri}/{proxy}"
}

resource "aws_apigatewayv2_route" "Test_API_rt" {
  api_id    = aws_apigatewayv2_api.Test_API.id
  route_key = "ANY /api/{proxy+}"
}

resource "aws_apigatewayv2_route" "Test_API_rt_auth_user" {
  api_id    = aws_apigatewayv2_api.Test_API.id
  route_key = "ANY /user_auth/{proxy+}"
}

resource "aws_apigatewayv2_route" "Test_API_rt_auth_manager" {
  api_id    = aws_apigatewayv2_api.Test_API.id
  route_key = "ANY /manager_auth/{proxy+}"
}

resource "aws_apigatewayv2_vpc_link" "Test_API_vpc" {
  name               = "${var.name}-link"
  security_group_ids = [data.aws_security_group.apigw.id]
  subnet_ids         = [data.aws_subnet.apigw.id]
}
