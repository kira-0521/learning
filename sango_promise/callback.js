const matte = (cb, seconds) => {
  setTimeout(() => {
    console.log(`${seconds}秒経過`)
    cb(seconds)
  }, 1000)
}

matte((seconds) => {
  console.log(`${seconds++}秒待ったよ`)
  matte((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    matte((seconds) => {
      console.log(`${seconds++}秒待ったよ`)
      matte((seconds) => {
        console.log(`${seconds++}秒待ったよ`)
        matte((seconds) => {
          console.log(`${seconds++}秒待ったよ`)
        }, seconds)
      }, seconds)
    }, seconds)
  }, seconds)
}, 1)
