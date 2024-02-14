
import { useMemo, Fragment } from 'react'
import Table from '@/components/ui/Table'
import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    flexRender,
} from '@tanstack/react-table'
import { momApiResponse } from './data'
import { HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi'
import type { ApiResponse } from './data'
import type { ColumnDef, Row } from '@tanstack/react-table'
import type { ReactElement } from 'react'
import { log } from 'console'

type ReactTableProps<T> = {
    renderRowSubComponent: (props: { row: Row<T> }) => ReactElement
    getRowCanExpand: (row: Row<T>) => boolean
    data:Data[]
}
type Data={

}

const { Tr, Th, Td, THead, TBody } = Table

function ReactTable({ renderRowSubComponent, getRowCanExpand,data }: ReactTableProps<ApiResponse>) {
  
    const columns = useMemo<ColumnDef<ApiResponse>[]>(
        () => [
            {
                // Make an expander cell
                header: () => null, // No header
                id: 'expander', // It needs an ID
                cell: ({ row }) => (
                    <>
                        {row.getCanExpand() ? (
                            <button
                                className="text-lg"
                                {...{ onClick: row.getToggleExpandedHandler() }}
                            >
                                {row.getIsExpanded() ? (
                                    <HiOutlineChevronDown />
                                ) : (
                                    <HiOutlineChevronRight />
                                )}
                            </button>
                        ) : null}
                    </>
                ),
                // We can override the cell renderer with a SubCell to be used with an expanded row
                subCell: () => null, // No expander on an expanded row
            },
            {
                header: 'MOM Id',
                accessorKey: 'mom_id',
            },
         // Update the 'Client Name' column definition
{
  header: 'Client Name',
  accessorKey: 'attendees',
  cell: (props) => {
    const row = props.row.original;
    const clientNames = Array.isArray(row.attendees?.client_name)
      ? row.attendees.client_name
      : [row.attendees.client_name];

    return <span>{clientNames.join(', ')}</span>;
  },
},

            {
                header: 'Meeting Date',
                accessorKey: 'meetingdate',
            },
            {
                header: 'Source',
                accessorKey: 'source',
            },
          
        ],
        []
    )

    const table = useReactTable({
        data: momApiResponse,
        columns,
        getRowCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    })
 

    return (
        <>
            <Table>
                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <Fragment key={row.id}>
                                <Tr>
                                    {/* first row is a normal row */}
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </Tr>
                                {row.getIsExpanded() && (
                                    <Tr>
                                        {/* 2nd row is a custom 1 cell row */}
                                        <Td
                                            colSpan={
                                                row.getVisibleCells().length
                                            }
                                        >
                                            {renderRowSubComponent({ row })}
                                        </Td>
                                    </Tr>
                                )}
                            </Fragment>
                        )
                    })}
                </TBody>
            </Table>
        </>
    )
}

const renderSubComponent = ({ row }: { row: Row<ApiResponse> }) => {
  const rowData = row.original;
  const clientNames = Array.isArray(rowData?.attendees?.client_name)
    ? rowData.attendees.client_name
    : [rowData.attendees.client_name];
    return (
        <pre style={{ fontSize: '10px' }}>
              <code>Client Name: {clientNames.join(', ')}</code>
        </pre>
    )
}

const SubComponent = ({data}:ApiResponse) => {
    return (
        <ReactTable
            renderRowSubComponent={renderSubComponent}
            getRowCanExpand={() => true}
            data={data}

        />
    )
}

export default SubComponent

