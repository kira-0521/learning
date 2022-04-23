import { CSSProperties } from 'react'

export const tableStyle: CSSProperties = {
  width: '1800px',
  tableLayout: 'fixed',
  whiteSpace: 'nowrap',
  borderCollapse: 'separate',
  borderSpacing: '24px 0',
}

export const tableHeaderStyle: CSSProperties = {
  border: '1px solid black',
  borderLeft: 'none',
  borderRight: 'none',
  backgroundColor: '#707070',
  color: '#fff',
  padding: '0 12px',
}

export const tableHeaderCellStyle = (
  w: string | number | undefined,
  isFixed = false,
  left?: string | number
) => {
  const defaults = {
    padding: '0 12px',
    textAlign: 'center',
    width: w,
  }
  return isFixed ? { ...defaults, position: 'sticky', left } : defaults
}

export const tableBodyStyle: CSSProperties = {
  borderBottom: 'solid 1px gray',
  background: 'papayawhip',
}

export const tableCellStyle = (isFixed = false, left?: number | string) => {
  return isFixed
    ? {
        position: 'sticky',
        left,
      }
    : undefined
}

export const column = [
  {
    Header: 'Column 1',
    accessor: 'col1',
    width: '100px',
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
    width: '200px',
  },
  {
    Header: 'Column 3',
    accessor: 'col3',
    width: '100px',
  },
  {
    Header: 'Column 4',
    accessor: 'col4',
    width: '200px',
  },
  {
    Header: 'Column 5',
    accessor: 'col5',
    width: '150px',
  },
  {
    Header: 'Column 6',
    accessor: 'col6',
    width: '150px',
  },
  {
    Header: 'Column 7',
    accessor: 'col7',
    width: '150px',
  },
  {
    Header: 'Column 8',
    accessor: 'col8',
    width: '100px',
  },
  {
    Header: 'Column 9',
    accessor: 'col9',
    width: '50px',
  },
  {
    Header: `Column\n10`,
    accessor: 'col10',
    width: '300px',
  },
]
