import { useMemo, FC, ChangeEvent, ReactNode } from 'react'
import { sample } from '../../../array'

import './table.css'

export const TableList: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          {sample.map((x) => (
            <td>{x.userId}</td>
          ))}
        </tr>
        <tr>
          <th>id</th>
          {sample.map((x) => (
            // TODO: 擬似要素でボーダー作る
            // TODO: ボーダーの高さカルクで上下のpadding分引く
            <td className='border-right'>{x.id}</td>
          ))}
        </tr>
        <tr>
          <th>title</th>
          {sample.map((x) => (
            <td>{x.title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>body</th>
          {sample.map((x) => (
            <td>{x.body}</td>
          ))}
        </tr>
        <tr>
          <th>body</th>
          {sample.map((x) => (
            <td>{x.body}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
