new Promise((resolve, reject) => {
  console.log('promise start')
  // 1. resolveとrejectはPromiseのcb内でしか呼べない
  // 5. resolveやrejectが呼ばれるまで後続の非同期処理は発火しない
  resolve('resolve内からの変数')
  // reject('rejectからの変数');
})
  .then((res) => {
    // 2. fullfilledをつなぐ時はメソッドチェーン
    console.log('then 1')
    return res
  })
  .then((res) => {
    console.log('then 2 ===>', res)
  })
  .then(() => {
    // 3. thenの中でエラーを投げたい時はthrow
    // 論点ではない: エラーオブジェクトが投げられる
    throw new Error()
    console.log('then 3')
  })
  .catch((err) => {
    // 4. rejectで受け取った引数を受け取る
    console.log(err)
  })
console.log('global end')
