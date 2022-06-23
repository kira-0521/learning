// ❶どの順番で出力される？
// new Promise((resolve) => {
//   console.log('promise')

//   setTimeout(() => {
//     console.log('setTimeOut')
//   })
//   resolve('thenへ')
// }).then((res) => {
//   console.log(res)
// })

// console.log('global end')

// EX問題
new Promise((resolve) => {
  console.log('promise')

  setTimeout(() => {
    console.log('setTimeOut')
  })

  resolve('thenへ')
})
  .then((res) => {
    console.log(res)
    return res
  })
  .then((res) => {
    console.log(res)
  })

console.log('global end')

// ❷どの順番で実行される？
// setTimeout(() => {
//   console.log('setTimeOut')
// });

// new Promise((resolve) => {
//   console.log('promise')
//   resolve('thenへ');
// }).then((res) => {
//   console.log(res)
// })

// console.log('global end')

// ❸どの順番で実行される？
// setTimeout(() => {
//   console.log('setTimeOut')
// })

// new Promise((resolve) => {
//   console.log('promise')
//   resolve()
// })
//   .then(() => {
//     console.log('then 1')
//     setTimeout(() => {
//       console.log('then 1の中のsetTimeOut')
//     })
//   })
//   .then(() => {
//     console.log('then 2')
//   })
//   .then(() => {
//     console.log('then 3')
//   })

// console.log('global end')
