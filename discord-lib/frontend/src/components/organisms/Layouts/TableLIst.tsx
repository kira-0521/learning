import { useMemo, FC, ChangeEvent, ReactNode } from 'react'
import { sample } from '../../../array'

import './table.css'

export const TableList: FC = () => {
  return (
    <table
      style={{
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        whiteSpace: 'nowrap',
        paddingRight: '10px',
      }}>
      <thead style={{ display: 'flex' }}>
        <tr>
          <th style={{ display: 'block', minWidth: '100px' }}>userId</th>
          {sample.map((x) => (
            <th style={{ display: 'block', minWidth: '100px' }}>{x.userId}</th>
          ))}
        </tr>
        <tr style={{ minWidth: '100px', background: 'teal' }}>
          <td style={{ display: 'block' }}>id</td>
          {sample.map((x) => (
            // TODO: 擬似要素でボーダー作る
            // TODO: ボーダーの高さカルクで上下のpadding分引く
            <td style={{ display: 'block', borderRight: '3px solid #000' }}>
              {x.id}
            </td>
          ))}
        </tr>
        <tr>
          <td style={{ minWidth: '100px', display: 'block' }}>title</td>
          {sample.map((x) => (
            <th style={{ display: 'block' }}>{x.title}</th>
          ))}
        </tr>
      </thead>
      <tbody style={{ display: 'flex', overflowX: 'auto' }}>
        <tr>
          <td style={{ minWidth: '100px', display: 'block' }}>body</td>
          {sample.map((x) => (
            <th style={{ display: 'block' }}>{x.body}</th>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
