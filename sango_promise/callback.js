const test = () => {
  console.log('Gi')
  setTimeout(() => {
    console.log('zu')
  }, 500)
}

const main = () => {
  test()
  // 秒数短縮すると下が先に呼ばれる
  setTimeout(() => {
    console.log('mo')
  }, 500)
}

main()
