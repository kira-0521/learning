module "my_vpc_subnet" {
  source = "./modules/vpc-subnet"

  vpc_cidr_block = "192.168.1.0/24"
  subnet_cidr_block = "192.168.1.0/25"
}

module "my_vpc_subnet-2" {

  source = "./modules/vpc-subnet"

  vpc_cidr_block = "192.168.2.0/24"
  subnet_cidr_block = "192.168.2.0/25"
}
module "my_vpc_subnet-3" {
  source = "./modules/vpc-subnet"

  vpc_cidr_block = "192.168.3.0/24"
  subnet_cidr_block = "192.168.3.0/25"
}