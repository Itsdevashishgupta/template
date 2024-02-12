import { useEffect, useCallback, useMemo } from 'react'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import DataTable from '@/components/shared/DataTable'
import {
    getCustomers,
    setTableData,
    setSelectedCustomer,
    setDrawerOpen,
    useAppDispatch,
    useAppSelector,
    Customer,
} from '../store'
import useThemeClass from '@/utils/hooks/useThemeClass'
import CustomerEditDialog from './CustomerEditDialog'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef } from '@/components/shared/DataTable'
import { HiOutlineEye } from 'react-icons/hi'

const statusColor: Record<string, string> = {
    FollowUp: 'bg-emerald-500',
    blocked: 'bg-red-500',
}


    const ActionColumn = ({ row }: { row: Customer }) => {
        const dispatch = useAppDispatch()
        const { textTheme } = useThemeClass()
        const navigate = useNavigate()
    
        const onEdit = () => {
    navigate(`/app/crm/customer-details?project_id=${row.project_id}&id=65c32e19e0f36d8e1f30955c`)

    
   
        }

  
        return (
            <div className="flex justify-end text-lg">
                <span
                    className={`cursor-pointer p-2 hover:${textTheme}`}
                    onClick={onEdit}
                >
                    <HiOutlineEye />
                </span>
                {/* <span
                    className="cursor-pointer p-2 hover:text-red-500"
                    onClick={onDelete}
                >
                    <HiOutlineTrash />
                </span> */}
            </div>
        )
}



const Customers = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.crmCustomers.data.customerList)
    const loading = useAppSelector((state) => state.crmCustomers.data.loading)
    const filterData = useAppSelector(
        (state) => state.crmCustomers.data.filterData
    )

    const { pageIndex, pageSize, sort, query, total } = useAppSelector(
        (state) => state.crmCustomers.data.tableData
    )

    const fetchData = useCallback(() => {
        dispatch(getCustomers({ pageIndex, pageSize, sort, query, filterData }))
    }, [pageIndex, pageSize, sort, query, filterData, dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData, pageIndex, pageSize, sort, filterData])

    const tableData = useMemo(
        () => ({ pageIndex, pageSize, sort, query, total }),
        [pageIndex, pageSize, sort, query, total]
    )

    const columns: ColumnDef<Customer>[] = useMemo(
        () => [
            {
                header: 'Project Name',
                accessorKey: 'project_name',
               
            },
            {
                header: 'Ptoject Type',
                accessorKey: 'project_type',
            },
            {
                header: 'Status',
                accessorKey: 'project_status',
                // cell: (props) => {
                //     const row = props.row.original
                //     return (
                //         <div className="flex items-center">
                //             <Badge className={statusColor[row.project_status]} />
                //             <span className="ml-2 rtl:mr-2 capitalize">
                //                 {row.project_status}
                //             </span>
                //         </div>
                //     )
                // },
            },
            {
                header: 'Timeline',
                accessorKey: 'timeline_date',
                cell: (props) => {
                    const row = props.row.original;
                    const date = new Date(row.timeline_date);
                    const formattedDate = date.toISOString().split('T')[0];
                    return formattedDate;
                },
                
            },
            {
                header: '',
                id: 'action',
                cell: (props) => <ActionColumn row={props.row.original} />,
            },
        ],
        []
    )

    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }

    const onSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        dispatch(setTableData(newTableData))
    }

    const onSort = (sort: OnSortParam) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        dispatch(setTableData(newTableData))
    }

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ width: 28, height: 28 }}
                loading={loading}
                pagingData={{
                    total: tableData.total as number,
                    pageIndex: tableData.pageIndex as number,
                    pageSize: tableData.pageSize as number,
                }}
                onPaginationChange={onPaginationChange}
                onSelectChange={onSelectChange}
                onSort={onSort}
            />
            <CustomerEditDialog />
        </>
    )
}

export default Customers
