import {
  useMemo,
  FC,
  CSSProperties,
  ReactNode,
  useState,
  useCallback,
  ChangeEvent,
} from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { useTable, Column, HeaderGroup, Row, Cell } from 'react-table'

import { PrimaryCheckbox } from '../../atoms/Forms/PrimaryCheckbox'

const tableStyle: CSSProperties = {
  minWidth: '1500px',
}

const tableHeaderStyle: CSSProperties = {
  border: '1px solid black',
  borderLeft: 'none',
  borderRight: 'none',
  backgroundColor: '#707070',
  color: '#fff',
}

const tableBodyStyle: CSSProperties = {
  borderBottom: 'solid 1px gray',
  background: 'papayawhip',
}

const tableCellStyle: CSSProperties = {
  padding: '10px',
}

interface Data {
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

export const WalletListTableWithChakra: FC = () => {
  const [checkLists, setCheckLists] = useState<string[]>([])
  const onListClick = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value
    console.log('checkbox value: ', targetValue)
    console.log('checkLists', checkLists)
    const isInCheckLists = checkLists.includes(targetValue)
    // チェックリストに値が含まれていれば取り除き、含まれていなければ追加
    isInCheckLists
      ? setCheckLists(checkLists.filter((val) => val !== targetValue))
      : setCheckLists([...checkLists, targetValue])
  }

  const data = useMemo(
    () => [
      {
        col1: (
          <PrimaryCheckbox
            checked={checkLists.includes('hello')}
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
      },
      {
        col1: (
          <PrimaryCheckbox
            checked={checkLists.includes('こんにちは')}
            value='こんにちは'
            onChange={(e: ChangeEvent<HTMLInputElement>) => onListClick(e)}
          />
        ),
        col2: 'World',
        col3: 'World',
        col4: 'Hello',
        col5: 'Hello',
        col6: 'World',
        col7: 'Hello',
        col8: 'World',
        col9: 'Hello',
        col10: 'World',
      },
      {
        col1: (
          <PrimaryCheckbox
            checked={checkLists.includes('グッバイ')}
            value='グッバイ'
            onChange={(e: ChangeEvent<HTMLInputElement>) => onListClick(e)}
          />
        ),
        col2: 'World',
        col3: 'World',
        col4: 'Hello',
        col5: 'Hello',
        col6: 'World',
        col7: 'Hello',
        col8: 'World',
        col9: 'Hello',
        col10: 'World',
      },
    ],
    []
  )

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
        width: '50px',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        width: '30px',
      },
      {
        Header: 'Column 3',
        accessor: 'col3', // accessor is the "key" in the data
        width: '50px',
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
        width: '30px',
      },
      {
        Header: 'Column 5',
        accessor: 'col5', // accessor is the "key" in the data
        width: '50px',
        isNumeric: true,
      },
      {
        Header: 'Column 6',
        accessor: 'col6',
        width: '30px',
      },
      {
        Header: 'Column 7',
        accessor: 'col7', // accessor is the "key" in the data
        width: '50px',
      },
      {
        Header: 'Column 8',
        accessor: 'col8',
        width: '30px',
      },
      {
        Header: 'Column 9',
        accessor: 'col9', // accessor is the "key" in the data
        width: '50px',
      },
      {
        Header: 'Column 10',
        accessor: 'col10',
        width: '30px',
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance
  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
          // tr ===> TableCommonProps型の属性を展開
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: HeaderGroup<Data>) => (
              // th ===> TableCommonProps型の属性を展開
              <Th {...column.getHeaderProps()} style={{ width: column.width }}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row: Row<Data>) => {
          // 表示する予定の行だけをレンダリングしてくれる
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell: Cell<Data>) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              })}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
