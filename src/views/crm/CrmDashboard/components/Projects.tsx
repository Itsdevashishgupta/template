import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Table from '@/components/ui/Table'
import Tag from '@/components/ui/Tag'
import Avatar from '@/components/ui/Avatar'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import type { Customer } from '../store'
import { log } from 'console'
import { useEffect, useState } from 'react'
import axios from 'axios'


type LeadsProps = {
    data?: Customer[]
    className?: string
    
}

const { Tr, Td, TBody, THead, Th } = Table





const NameColumn = ({ row }: { row: Customer }) => {
    
    
    return (
        <div className="flex items-center gap-2">
            <span className="font-semibold">{row.clientName}</span>
        </div>
    )
}

const LeadStatus = ({ status }: { status: number }) => {
    switch (status) {
        case 0:
            return <Tag className="rounded-md">Not Interested</Tag>
        case 1:
            return (
                <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded">
                    Interested
                </Tag>
            )
        case 2:
            return (
                <Tag className="text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20  border-0 rounded">
                    Follow Up
                </Tag>
            )
        case 3:
            return (
                <Tag className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 border-0 rounded">
                    No Response
                </Tag>
            )
        default:
            return <></>
    }
}

const columnHelper = createColumnHelper<Customer>()

const columns = [
    columnHelper.accessor('clientName', {
        header: 'Client Name',
        cell: (props) => {
            const row = props.row.original
            return <NameColumn row={row} />
        },
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (props) => {
            const row = props.row.original
            return <LeadStatus status={row.status} />
        },
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('leadDate', {
        header: 'Lead Date',
        cell: (props) => {
            const row = props.row.original
            return (
                <span>
                    {dayjs.unix(row.leadDate).format('DD/MM/YYYY ')}
                </span>
            )
        },
    }),
    columnHelper.accessor('phone', {
        header: 'Phone',
        cell: (props) => {
            const row = props.row.original
            return (
                <Tag className="rounded-md font-bold cursor-pointer select-none text-gray-900 dark:text-gray-100">
                    {row.phone}
                </Tag>
            )
        },
    }),
]
const Project = ({ data = [], className }: LeadsProps) => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('your-api-endpoint-here');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    const navigate = useNavigate()

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const onNavigate = () => {
        navigate('/app/crm/projectslist')
    }
    interface client{
        client_name:string
    }
    interface Data {
       project_name:string
       project_type:string
       project_status:string
       client:client[]
       timeline_date:string
      }
      interface ApiResponse {
        data: Data[];
      }
      interface ApiResponse1 {
        data: ApiResponse[];
      }

    const [apiData, setApiData] = useState<Data[]>([]);

    useEffect(() => {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project/?id=65c32e19e0f36d8e1f30955c')
        .then((response) => response.json())
        .then((data: ApiResponse1) => setApiData(data.data.projects.slice(0,5)))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
    console.log(apiData);
    

    return (
        <Card className={className}>
            <div className="flex items-center justify-between mb-4">
                <h4>Projects</h4>
                <Button size="sm" onClick={onNavigate}>
                    View All Projects
                </Button>
            </div>
            <Table>
        <THead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Project Status</Th>
            <Th>Client Name</Th>
            <Th>Timeline Date</Th>
            <Th>Project Type</Th>
          </Tr>
        </THead>
        <TBody>
          {apiData.map((item, index) => (
            <Tr key={index}>
              <Td className=' capitalize'>{item.project_name}</Td>
              <Td className=' capitalize'>{item.project_status}</Td>
              <Td className="capitalize">{item.client[0].client_name}</Td>
              <Td>{dayjs(item.timeline_date).format('DD-MM-YYYY')}</Td>
              <Td  >
                <span className={
                  item.project_type === 'commercial' || item.project_type==='Commercial'
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 border-0 rounded px-2 py-1 capitalize font-semibold text-xs'
                    : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100  border-0 rounded capitalize font-semibold text-xs px-2 py-1'
                }>{item.project_type}</span>
              </Td>
            </Tr>
          ))}
        </TBody>
      </Table>
        </Card>
    )
}

export default Project
