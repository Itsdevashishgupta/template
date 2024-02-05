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
import type { Lead } from '../store'

type LeadsProps = {
    data?: Lead[]
    className?: string
}

const { Tr, Td, TBody, THead, Th } = Table

const NameColumn = ({ row }: { row: Lead }) => {
    console.log(row);
    
    return (
        <div className="flex items-center gap-2">
            <span className="font-semibold">{row.projectName}</span>
        </div>
    )
}

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

const columnHelper = createColumnHelper<Lead>()

const columns = [
    columnHelper.accessor('name', {
        header: 'Prjocet Name',
        cell: (props) => {
            const row = props.row.original
            return <NameColumn row={row} />
        },
    }),
    columnHelper.accessor('projectType', {
        header: 'Project Type',
        cell: (props) => {
            const row = props.row.original
            return <LeadStatus projectType={row.projectType} />
        },
    }),
    columnHelper.accessor('phase', {
        header: 'Phase',
    }),
    columnHelper.accessor('clientName', {
        header: 'Client Name',
        
    }),
    columnHelper.accessor('estimatedCompletion', {
        header: 'Timeline',
      
    }),
]

const Leads = ({ data = [], className }: LeadsProps) => {
    const navigate = useNavigate()

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const onNavigate = () => {
        navigate('/app/crm/customers')
    }

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
                            <Tr key={row.id}>
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
        </Card>
    )
}

export default Leads
