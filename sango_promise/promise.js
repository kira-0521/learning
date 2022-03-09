// const matte = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${seconds}秒経過`)
//       resolve(seconds)
//     }, 1000)
//   })
// }

// matte(1).then((seconds) => {
//   console.log(`${seconds++}秒待ったよ`)
//   matte(seconds).then((seconds) => {
//     console.log(`${seconds++}秒待ったよ`)
//   })
// })

const matte = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${seconds}秒経過`)
      resolve(seconds)
    }, 1000)
  })
}

matte(1)
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    return matte(seconds)
  })
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    return matte(seconds)
  })
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    return matte(seconds)
  })
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    return matte(seconds)
  })
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    return matte(seconds)
  })
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
    return matte(seconds)
  })
  .then((seconds) => {
    console.log(`${seconds++}秒待ったよ`)
  })
