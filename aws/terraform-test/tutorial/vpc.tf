resource "aws_vpc" "terraform-demo" {
  cidr_block = "192.168.1.0/24"

  tags = {
    Name = "terraform-demo-vpc"
  }
}

resource "aws_subnet" "terraform-demo_1a" {
  vpc_id            = aws_vpc.terraform-demo.id
  cidr_block        = "192.168.1.0/25"
  availability_zone = "ap-northeast-1a"

  tags = {
    Name = "terraform-demo-1a"
  }
}