const test = () => {
  console.log('Gi')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('zu')
      resolve()
    }, 500)
  })
}

const main = async () => {
  // await必要
  await test()
  console.log('mo')
}

main()
