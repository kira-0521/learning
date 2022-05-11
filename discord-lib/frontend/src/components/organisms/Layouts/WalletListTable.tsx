import { useMemo, FC, ChangeEvent, ReactNode } from 'react'
import { useTable, Column, HeaderGroup, Row, Cell } from 'react-table'
import { Box } from '@chakra-ui/react'
import _ from 'lodash'

import { PrimaryCheckbox } from '../../atoms/Forms/PrimaryCheckbox'
import {
  tableStyle,
  tableBodyStyle,
  tableHeaderStyle,
} from '../../../scripts/table'

type Data = {
  col1: ReactNode
  col2: string
  col3: string
  col4: string
  col5: string
  col6: string
  col7: string
  col8: string
  col9: string
  col10: string
}

export const WalletListTable: FC = () => {
  const onListClick = (e: ChangeEvent<HTMLInputElement>) => console.log(e)

  // テーブル用のデータ
  const arr = _.map(_.fill(Array(20), null), () => ({
    col1: (
      <PrimaryCheckbox
        checked={false}
        value='hello'
        onChange={(e: ChangeEvent<HTMLInputElement>) => onListClick(e)}
        border='1px solid'
        rounded='sm'
        bg='red'
        boxSizing='border-box'
      />
    ),
    col2: 'Worldfdsafdsfsdfsdfda',
    col3: 'Worldfdsafdsfsdfsdfda',
    col4: 'Hello',
    col5: 'Hello',
    col6: 'Worldfdsafdsfsdfsdfda',
    col7: 'Hello',
    col8: 'Worldfdsafdsfsdfsdfda',
    col9: 'Hello',
    col10: 'World',
  }))
  const data: Data[] = useMemo(() => arr, [])

  // テーブル用のカラム
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
        width: '100px',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        width: '200px',
      },
      {
        Header: 'Column 3',
        accessor: 'col3', // accessor is the "key" in the data
        width: '100px',
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
        width: '200px',
      },
      {
        Header: 'Column 5',
        accessor: 'col5', // accessor is the "key" in the data
        width: '150px',
      },
      {
        Header: 'Column 6',
        accessor: 'col6',
        width: '150px',
      },
      {
        Header: 'Column 7',
        accessor: 'col7', // accessor is the "key" in the data
        width: '150px',
      },
      {
        Header: 'Column 8',
        accessor: 'col8',
        width: '100px',
      },
      {
        Header: 'Column 9',
        accessor: 'col9', // accessor is the "key" in the data
        width: '50px',
      },
      {
        Header: `Column\n10`,
        accessor: 'col10',
        width: '300px',
      },
    ],
    []
  )

  // カラムとデータを渡してテーブルリスト用のデータが格納されたオブジェクトをインスタンス化
  const tableInstance = useTable({ columns, data })
  // テーブルインスタンスからデータ取得に必要なプロパティを取得
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <Box>
      <table {...getTableProps({ style: tableStyle })}>
        <thead>
          {_.map(headerGroups, (headerGroup: HeaderGroup<Data>) => (
            <tr
              {...headerGroup.getHeaderGroupProps({
                style: tableHeaderStyle,
              })}
              className='table-header'>
              {_.map(headerGroup.headers, (column: HeaderGroup<Data>) => {
                return (
                  // th ===> TableCommonProps型の属性を展開
                  <th
                    {...column.getHeaderProps({
                      style: {
                        width: column.width,
                        padding: 0,
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        backgroundColor: '#707070',
                      },
                    })}>
                    {column.render('Header')}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {_.map(rows, (row: Row<Data>) => {
            // 表示する予定の行だけをレンダリングしてくれる
            prepareRow(row)
            return (
              <tr {...row.getRowProps({ style: tableBodyStyle })}>
                {_.map(row.cells, (cell: Cell<Data>) => {
                  return (
                    <td {...cell.getCellProps({})}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Box>
  )
}
