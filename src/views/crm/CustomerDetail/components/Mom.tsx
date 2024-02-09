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
import { Button, DatePicker, FormContainer, FormItem, Input, Select, Tooltip, Upload } from '@/components/ui'
import Dialog from '@/components/ui/Dialog'
import { HiOutlineEye, HiOutlineTrash, HiPlusCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { MouseEvent } from 'react'
import DateTimepicker from '@/components/ui/DatePicker/DateTimepicker'

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
    columnHelper.accessor('mom_id', {
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

const navigate=useNavigate();


const [dialogIsOpen, setIsOpen] = useState(false)

const openDialog = () => {
    setIsOpen(true)
}

const onDialogClose = (e: MouseEvent) => {
    console.log('onDialogClose', e)
    setIsOpen(false)
}

const onDialogOk = (e: MouseEvent) => {
    console.log('onDialogOk', e)
    setIsOpen(false)
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
    userName: Yup.string()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('User Name Required'),
    password: Yup.string()
        .required('Password Required')
        .min(8, 'Too Short!')
        .matches(/^[A-Za-z0-9_-]*$/, 'Only Letters & Numbers Allowed'),
    rememberMe: Yup.bool(),
})


const colourOptions = [
    { value: 'online', label: 'Online' },
    { value: 'atCLientPLace', label: 'At CLient PLace' },
    { value: 'onSite', label: 'On Site' },
    { value: 'inOffice', label: 'In Office' },
 
]


const [inputCount, setInputCount] = useState(0);
const [inputValues, setInputValues] = useState(Array.from({ length: inputCount }, () => ''));
const addInput = () => {
    setInputCount(inputCount + 1);
    setInputValues([...inputValues, '']);
  };


    return (
        <div className="mb-4 relative">
            <div  className='flex items-center justify-between mb-4'>
                <div></div>
                <div>
            <Button variant="solid" onClick={() => openDialog()}>
                Add MOM
            </Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                className={`h-[520px]`}
            >
                     <div>
            <Formik
                initialValues={{
                    email: '',
                    userName: '',
                    password: '',
                    rememberMe: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                        resetForm()
                    }, 500)
                }}
            >
                {({ touched, errors, resetForm }) => (
                    <Form className=' absolute overflow-y-scroll max-h-[88%]'>
                        <FormContainer className=''>
                            <div className=''>
                        <div className=' grid grid-cols-2 xl:grid xl:grid-cols-2 gap-3 mr-4'>
                            <FormItem
                                label="Meeting Date"
                                invalid={errors.email && touched.email}
                                errorMessage={errors.email}
                            >
                               <DateTimepicker placeholder="Pick date & time" />
                            </FormItem>
                            <FormItem
                                label="Mode of Meeting"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                               <Select
                placeholder="Please Select"
                options={colourOptions}
            ></Select>
                            </FormItem>
                            </div>

                            <h5>Attendees</h5>

                            {/* {inputValues.map((value, index) => (
             <div className=' grid grid-cols-1 xl:grid xl:grid-cols-2 gap-3'>
                            <FormItem
                                label="Role"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                              <Input placeholder="Role" />
                            </FormItem>
                            <FormItem
                                label="Name"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                              <Input placeholder="Name" />
                            </FormItem>
                          
                            </div>
        ))}
<div className=' flex justify-between items-center mb-4 mr-4'>
    <div></div>
<Button variant="solid" type="submit" onClick={addInput}>
                                    +
                                </Button>
                                </div> */}
                            {inputValues.map((value, index) => (
             <div className=' grid grid-cols-2 xl:grid xl:grid-cols-2 gap-3 mr-4'>
                            <FormItem
                                label="Role"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                              <Input placeholder="Role" />
                            </FormItem>
                            <FormItem
                                label="Name"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                              <Input placeholder="Name" />
                            </FormItem>
                          
                            </div>
        ))}
<div className=' flex justify-between items-center mb-4 mr-4 gap-2'>
    <div className=' flex justify-between gap-3'>   <FormItem
                                label="Role"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                              <Input placeholder="Role" />
                            </FormItem>
                            <FormItem
                                label="Name"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                            >
                              <Input placeholder="Name" />
                            </FormItem></div>
<Button variant="solid" type="submit" onClick={addInput}>
                                    +
                                </Button>
                                </div>

                                <FormItem
                                label="Remarks"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                                className='mr-4'
                            >
                              
                                <Input placeholder="Remarks" textArea />
                            </FormItem>
                                <FormItem
                                label="Document"
                                invalid={errors.userName && touched.userName}
                                errorMessage={errors.userName}
                                className='mr-4'
                            >
                              
                              <Upload />
                            </FormItem>



                            <FormItem>
                                <Button
                                    type="reset"
                                    className="ltr:mr-2 rtl:ml-2"
                                    onClick={() => resetForm()}
                                >
                                    Reset
                                </Button>
                                <Button variant="solid" type="submit">
                                    Submit
                                </Button>
                            </FormItem>
                            
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
            </Dialog>
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
