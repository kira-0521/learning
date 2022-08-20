terraform {
  backend "s3" {
    bucket = "terraform-test-backet0521"
    key    = "terraform.tfstate"
    region = "ap-northeast-1"
  }
}

provider "aws" {
  region = "ap-northeast-1"
}