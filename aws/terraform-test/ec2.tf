resource "aws_instance" "sandbox" {
  count = 1
  ami = "ami-785c491f"
  instance_type = "t2.micro"

  tags = {
    Name = "${format("modified sandbox-%02d", count.index + 1)}"
  }
}