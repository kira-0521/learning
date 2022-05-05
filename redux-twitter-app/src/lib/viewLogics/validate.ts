/*

email

*/
export const validateEmailAddress = (address: string): boolean => {
  const regexp =
    /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  return regexp.test(address)
}

/*

password

*/
export const validatePassword = (password: string): boolean => {
  return password.length > 6
}

/*

email & password

*/
export const validateEmailAndPassword = (
  address: string,
  password: string
): boolean => {
  return validateEmailAddress(address) && validatePassword(password)
}
