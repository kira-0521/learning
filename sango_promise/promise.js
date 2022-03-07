const test = () => {
  console.log('Gi')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('zu')
      resolve()
    }, 500)
  })
}

const main = () => {
  test().then(() => {
    console.log('mo')
  })
}

main()
