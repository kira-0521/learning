declare let window: any

import Web3 from 'web3'

let currentWeb3

// MetaMask ver0.5以降のチェック処理
if (window.ethereum) {
  // web3インスタンス
  let instance = new Web3(window.ethereum)
  try {
    // アカウントへのアクセスを要求する
    window.ethereum.enable()

    // MetaMaskのプロバイダの使用
    currentWeb3 = instance
  } catch (err) {
    // アクセスを拒否された時のアラートを表示
    alert('Please allow access for the app to work')
  }
} else {
  console.log(
    'Non-Ethereum browser detected. You should consider trying MetaMask!'
  )
}

export default currentWeb3
