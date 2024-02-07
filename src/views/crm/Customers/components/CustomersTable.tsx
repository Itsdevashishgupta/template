import { useEffect, useCallback, useMemo, useState } from 'react'
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
import { Tag } from '@/components/ui'
import { log } from 'console'
import { HiOutlineEye } from 'react-icons/hi'

const statusColor: Record<string, string> = {
    active: 'bg-emerald-500',
    blocked: 'bg-red-500',
}

const ActionColumn = ({ row }: { row: Customer }) => {
    const { textTheme } = useThemeClass()
    const dispatch = useAppDispatch()
        const navigate = useNavigate()

    const onEdit = () => {
        dispatch(setDrawerOpen())
        dispatch(setSelectedCustomer(row))
    }
    const onView = useCallback(() => {
        navigate(`/app/crm/customer-details?id=8`)
    }, [navigate, row])

    return (
        <div
            className={`${textTheme} cursor-pointer select-none font-semibold`}
            onClick={onView}
        >
            <HiOutlineEye/>
        </div>
    )
}

const NameColumn = ({ row }: { row: Customer }) => {
    const { textTheme } = useThemeClass()

    return (
        <div className="flex items-center">
            <Avatar size={28} shape="circle" src={row.img} />
            <Link
                className={`hover:${textTheme} ml-2 rtl:mr-2 font-semibold`}
                to={`/app/crm/customer-details?id=${row.id}`}
            >
                {row.name}
            </Link>
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

    const LeadStatus = ({ projectType }: { projectType: number }) => {
        switch (projectType) {
            case 0:
                return <Tag className="rounded-md">New</Tag>
            case 1:
                return (
                    <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded">
                        Commercial
                    </Tag>
                )
            case 2:
                return (
                    <Tag className="text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded">
                        Not Interested
                    </Tag>
                )
            case 3:
                return (
                    <Tag className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 border-0 rounded">
                        Residential
                    </Tag>
                )
            default:
                return <></>
        }
    }

    const inventoryStatusColor: Record<
    string,
    {
        label: string
        dotClass: string
        textClass: string
    }
> = {
   "Interested" : {
        label: 'Interested',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    "followUp": {
        label: 'Follow Up',
        dotClass: 'bg-amber-500',
        textClass: 'text-amber-500',
    },
    "cancel": {
        label: 'Not Interested',
        dotClass: 'bg-red-500',
        textClass: 'text-red-500',
    },
}



    const columns: ColumnDef<Customer>[] = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'project_name',
                // cell: (props) => {
                //     const row = props.row.original
                //     return <NameColumn row={row} />
                // },
            },
            {
                header: 'Client Name',
                accessorKey: 'client_name',
                cell: (props) => {
                    const row = props.row.original;
                    const client = row.client[0]; // Assuming there's only one client for each project
                    return (
                        <span>
                            {client.client_name}</span>
                    
                    );
                },
            },
            {
                header: 'Status',
                accessorKey: 'project_status',
            },
            {
                header: 'Date',
                accessorKey: 'timeline_date',
                cell: (props) => {
                    const row = props.row.original;
                    const date = new Date(row.timeline_date);
                    const formattedDate = date.toISOString().split('T')[0];
                    return formattedDate;
                },
            },
            {
                header: 'Project Type',
                accessorKey: 'project_type',
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

    const [projects, setprojects] = useState<any[]>([]);
    console.log(projects);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project?id=65c32e19e0f36d8e1f30955c');
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

    return (
        <>
            <DataTable
                columns={columns}
                data={projects}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ width: 28, height: 28 }}
                
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
