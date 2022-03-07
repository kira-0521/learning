const test = () => {
  console.log('Gi')
  setTimeout(() => {
    console.log('zu')
  }, 500)
}

const main = () => {
  test()
  console.log('mo')
}

main()
