import { useTable } from 'react-table'
import * as React from 'react'
import { Loader } from '../Loader'

/**
 * React-table currently don't implement types
 *
 */
export interface TableProps {
  columns: any[]
  data: any[]
  loading: boolean
}

export const Table = ({ columns, data, loading }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()} className="table is-striped is-fullwidth">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(header => (
              <th {...header.getHeaderProps()}>{header.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {loading ? (
          <div className="table-loading">
            <Loader />
          </div>
        ) : (
          rows.map(
            row =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
          )
        )}
      </tbody>
    </table>
  )
}