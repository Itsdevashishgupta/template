import { useCallback, useEffect, useState } from 'react'
import Table from '@/components/ui/Table'
import Badge from '@/components/ui/Badge'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    createColumnHelper,

} from '@tanstack/react-table'
import { NumericFormat } from 'react-number-format'
import { useAppSelector, OrderHistory } from '../store'
import dayjs from 'dayjs'
import { Button, Tooltip } from '@/components/ui'
import { HiOutlineEye, HiOutlineTrash, HiPlusCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const { Tr, Th, Td, THead, TBody, Sorter } = Table

const statusColor: Record<string, string> = {
    paid: 'bg-emerald-500',
    pending: 'bg-amber-400',
}

const columnHelper = createColumnHelper<OrderHistory>()
type Order = {
    id: string
    date: number
    customer: string
    status: number
    paymentMehod: string
    paymentIdendifier: string
    totalAmount: number
}

const ActionColumn = ({ row }: { row: Order }) => {
    // const dispatch = useAppDispatch()
    // const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    // const onDelete = () => {
    //     dispatch(setDeleteMode('single'))
    //     dispatch(setSelectedRow([row.id]))
    // }

    const onView = useCallback(() => {
        navigate(`/appy`)
    }, [navigate, row])

    return (
        <div className="flex justify-end text-lg">
            <Tooltip title="View">
                <span
                    className={`cursor-pointer p-2 hover:`}
                    onClick={onView}
                >
                    <HiOutlineEye />
                </span>
            </Tooltip>
            {/* <Tooltip title="Delete">
                <span
                    className="cursor-pointer p-2 hover:text-red-500"
                    onClick={onDelete}
                >
                    <HiOutlineTrash />
                </span>
            </Tooltip> */}
        </div>
    )
}

const columns = [
    columnHelper.accessor('id', {
        header: 'MOMId',
        // cell: (props) => {
        //     const row = props.row.original
        //     return (
        //         <div>
        //             <span className="cursor-pointer">{row.id}</span>
        //         </div>
        //     )
        // },
    }),
    columnHelper.accessor('source', {
        header: 'Mode Of Meeting',
    }),
    // columnHelper.accessor('date', {
    //     header: 'Date',
    //     cell: (props) => {
    //         const row = props.row.original
    //         return (
    //             <div className="flex items-center">
    //                 <Badge className={statusColor[row.status]} />
    //                 <span className="ml-2 rtl:mr-2 capitalize">
    //                     {row.status}
    //                 </span>
    //             </div>
    //         )
    //     },
    // }),
    columnHelper.accessor('date', {
        header: 'Date',
        cell: (props) => {
            const row = props.row.original
            return (
                <>
                <div className="flex items-center">
                    {dayjs.unix(row.date).format('MM/DD/YYYY')}
             
                </div>
                <div>
                </div>
                </>
            )
        },
    }),
    
    // columnHelper.accessor('amount', {
    //     header: 'Amount',
    //     cell: (props) => {
    //         const row = props.row.original
    //         return (
    //             <div className="flex items-center">
    //                 <NumericFormat
    //                     displayType="text"
    //                     value={(Math.round(row.amount * 100) / 100).toFixed(2)}
    //                     prefix={'$'}
    //                     thousandSeparator={true}
    //                 />
    //             </div>
    //         )
    //     },
    // }),
]

const MOM = () => {
    const data = useAppSelector(
        (state) => state.crmCustomerDetails.data.paymentHistoryData
    )

    const [sorting, setSorting] = useState<
        {
            id: string
            desc: boolean
        }[]
    >([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })


    const [projects, setprojects] = useState<any[]>([]);
    console.log(projects);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project?id=65c0b29f1564e92b81703b4d'); // Replace with your actual API endpoint
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const jsonData = await response.json();
          setprojects(jsonData.data.projects);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

const navigate=useNavigate();


    return (
        <div className="mb-4 relative">
            <div  className='flex items-center justify-between mb-4'>
                <div></div>
                <div className=''>
            <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
                    Add MOM
                </Button>
                </div>
          
                </div>
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
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className:
                                                        header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                    onClick:
                                                        header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {
                                                    <Sorter
                                                        sort={header.column.getIsSorted()}
                                                    />
                                                }
                                            </div>
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table
                        .getRowModel()
                        .rows.slice(0, 10)
                        .map((row) => {
                            return (
                                <Tr key={row.id} onClick={()=>navigate('/app/crm/mom')} className=' cursor-pointer' >
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <Td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                </TBody>
            </Table>
        </div>
    )
}

export default MOM
