import { useEffect, useMemo, useRef, useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import DataTable from '@/components/shared/DataTable'
import { HiOutlineEye, HiOutlinePencil, HiOutlineTrash, HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi'
import { FiPackage } from 'react-icons/fi'
import {
    getProducts,
    setTableData,
    setSelectedProduct,
    toggleDeleteConfirmation,
    useAppDispatch,
    useAppSelector,
} from '../store'
import useThemeClass from '@/utils/hooks/useThemeClass'
import ProductDeleteConfirmation from './ProductDeleteConfirmation'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import type {
    DataTableResetHandle,
    OnSortParam,
    ColumnDef,
} from '@/components/shared/DataTable'

import { fetchLeads } from '@/mock/data/salesData'
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

const ActionColumn = ({ row }: { row: Product }) => {
    const [leads, setLeads] = useState<any[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/lead/'); // Replace with your actual API endpoint
           
           
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const jsonData = await response.json();
          setLeads(jsonData.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    const dispatch = useAppDispatch()
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onEdit = () => {

        navigate(`/app/crm/lead/`)
    }

    const onDelete = () => {
        dispatch(toggleDeleteConfirmation(true))
        dispatch(setSelectedProduct(row.id))
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const leadsData = await fetchLeads();
           
            // Handle and use the leadsData in your component
          } catch (error) {
            // Handle errors if needed
          }
        };
    
        fetchData();
      }, []);
    

    return (
        <div className="flex justify-end text-lg">
            <span
                className={`cursor-pointer p-2 hover:${textTheme}`}
                onClick={onEdit}
            >
                <HiOutlineEye />
            </span>
            <span
                className="cursor-pointer p-2 hover:text-red-500"
                onClick={onDelete}
            >
                <HiOutlineTrash />
            </span>
        </div>
    )
}

const ProductColumn = ({ row }: { row: Product }) => {
    const avatar = row.img ? (
        <Avatar src={row.img} />
    ) : (
        <Avatar icon={<FiPackage />} />
    )

    return (
        <div className="flex items-center">
            {/* {avatar} */}
            <span className={`ml-2 rtl:mr-2 font-semibold`}>{row.name}</span>
        </div>
    )
}

const ProductTable = () => {
    const tableRef = useRef<DataTableResetHandle>(null)

    const dispatch = useAppDispatch()

    const { pageIndex, pageSize, sort, query, total } = useAppSelector(
        (state) => state.salesProductList.data.tableData
    )

    const filterData = useAppSelector(
        (state) => state.salesProductList.data.filterData
    )

    const loading = useAppSelector(
        (state) => state.salesProductList.data.loading
    )

    var data = useAppSelector(
        (state) => state.salesProductList.data.productList
    )

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageIndex, pageSize, sort])

    useEffect(() => {
        if (tableRef) {
            tableRef.current?.resetSorting()
        }
    }, [filterData])

    const tableData = useMemo(
        () => ({ pageIndex, pageSize, sort, query, total }),
        [pageIndex, pageSize, sort, query, total]
    )

    const fetchData = () => {
        dispatch(getProducts({ pageIndex, pageSize, sort, query, filterData }))
    }
    const NameColumn = ({ row }: { row: Product }) => {
        const { textTheme } = useThemeClass()
    
        return (
            <div className="flex items-center">
                <Avatar size={28} shape="circle" src={row.img} />
                <Link
                    className={`hover:${textTheme} ml-2 rtl:mr-2 font-semibold`}
                    to={`/app/crm/lead?id=${row.lead_id}`}
                >
                    {row.name}
                </Link>
            </div>
        )
    }

    const columns: ColumnDef<Product>[] = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'name',
                cell: (props) => {
                    const row = props.row.original
                    return <NameColumn row={row} />
                },
            },
            {
                header: 'Email',
                accessorKey: 'email',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.email}</span>
                },
            },
            {
                header: 'Lead Date',
                accessorKey: 'createdAt',
                // cell: (props) => {
                //     const row = props.row.original;
                //     const date = new Date(row.createdAt);
                //     const formattedDate = date.toISOString().split('T')[0];
                //     return formattedDate;
                // },
            },
            {
                header: 'Status',
                accessorKey: 'status',
                // cell: (props) => {
                //     const { status } = props.row.original
                //     return (
                //         <div className="flex items-center gap-2">
                //             <Badge
                //                 className={
                //                     inventoryStatusColor[status].dotClass
                //                 }
                //             />
                //             <span
                //                 className={`capitalize font-semibold ${inventoryStatusColor[status].textClass}`}
                //             >
                //                 {inventoryStatusColor[status].label}
                //             </span>
                //         </div>
                //     )
                // },
            },
            {
                header: 'Phone',
                accessorKey: 'phone',
                sortable: true,
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



    const [leads, setLeads] = useState<any[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/lead/'); // Replace with your actual API endpoint
           
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const jsonData = await response.json();
          setLeads(jsonData.data);
          data=jsonData;
          console.log(data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    
   
    return (
        <>
            <DataTable
                ref={tableRef}
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
                
                pagingData={{
                    total: tableData.total as number,
                    pageIndex: tableData.pageIndex as number,
                    pageSize: tableData.pageSize as number,
                }}
                onPaginationChange={onPaginationChange}
                onSelectChange={onSelectChange}
                onSort={onSort}
            />
            <ProductDeleteConfirmation />
        </>
    )
}

export default ProductTable
