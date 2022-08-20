resource "aws_vpc" "terraform-demo" {
  cidr_block = var.vpc_cidr_block

  tags = {
    Name = "terraform-demo-vpc"
  }
}

resource "aws_subnet" "terraform-demo_1a" {
  vpc_id            = aws_vpc.terraform-demo.id
  cidr_block        = var.subnet_cidr_block
  availability_zone = "ap-northeast-1a"

  tags = {
    Name = "terraform-demo-1a"
  }
}