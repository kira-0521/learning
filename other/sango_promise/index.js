const test = () => {
  console.log('Gi')
  setTimeout(() => {
    console.log('zu')
  }, 500)
}

const test2 = () => {
  console.log('test2')
}

const main = () => {
  test()
  console.log('mo')
}

test()
test2()
main()
