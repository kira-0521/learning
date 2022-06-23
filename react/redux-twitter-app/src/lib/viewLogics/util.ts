import { map, join } from 'lodash'

/*

ランダムな16文字の文字列を生成

*/
export const getUniqueChar = (): string => {
  const S = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ01234567789'
  const N = 16
  return join(
    map(
      Array.from(crypto.getRandomValues(new Uint32Array(N))),
      (n) => S[n % S.length]
    ),
    ''
  )
}

/*

modalの位置取得

*/
export const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}
