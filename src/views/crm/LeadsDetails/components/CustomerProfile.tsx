import { useState } from 'react'
import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from 'react-icons/fa'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {
    deleteCustomer,
    openEditCustomerDetailDialog,
    useAppDispatch,
    Customer,
} from '../store'
import EditCustomerProfile from './EditCustomerProfile'
import { FormItem, Input } from '@/components/ui'
import Select from '@/components/ui/Select'
import DateTimepicker from '@/components/ui/DatePicker/DateTimepicker'
import { Field, FieldProps } from 'formik'
import { RichTextEditor } from '@/components/shared'

type CustomerInfoFieldProps = {
    title?: string
    value?: string
}

type CustomerProfileProps = {
    data?: Partial<Customer>
}

const CustomerInfoField = ({ title, value }: CustomerInfoFieldProps) => {
    return (
        <div>
            <span>{title}</span>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">
                {value}
            </p>
        </div>
    )
}

const CustomerProfileAction = ({ id }: { id?: string }) => {
    const dispatch = useAppDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)

    const navigate = useNavigate()

    const onDialogClose = () => {
        setDialogOpen(false)
    }

    const onDialogOpen = () => {
        setDialogOpen(true)
    }

    const onDelete = () => {
        setDialogOpen(false)
        if (id) {
            dispatch(deleteCustomer({ id }))
        }
        navigate('/app/crm/customers')
        toast.push(
            <Notification title={'Successfuly Deleted'} type="success">
                Customer successfuly deleted
            </Notification>
        )
    }

    const onEdit = () => {
        dispatch(openEditCustomerDetailDialog())
    }

  
    return (
        <>
            <Button block icon={<HiOutlineTrash />} onClick={onDialogOpen}>
                Delete
            </Button>
            <Button
                block
                icon={<HiPencilAlt />}
                variant="solid"
                onClick={onEdit}
            >
                Edit
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                type="danger"
                title="Delete customer"
                confirmButtonColor="red-600"
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                onCancel={onDialogClose}
                onConfirm={onDelete}
            >
                <p>
                    Are you sure you want to delete this customer? All record
                    related to this customer will be deleted as well. This
                    action cannot be undone.
                </p>
            </ConfirmDialog>
            <EditCustomerProfile />
        </>
    )
}

const CustomerProfile = ({ data = {} }: CustomerProfileProps) => {
    console.log(data);
    const leadStatus = [
        { value: 'followUp', label: 'Follow Up' },
        { value: 'interested', label: 'Interested' },
        { value: 'notInterested', label: 'Not Interested' },
        { value: 'noResponse', label: 'No Response' },
    ]

    
    return (
        <div className=' flex flex-col gap-3'>
        <Card>
            <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
              <h5>Basic Information</h5>
                <div className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 gap-y-7 gap-x-4 mt-8">
                    
                <CustomerInfoField
                        title="Name"
                        value="Devashish"
                    />
                    <CustomerInfoField
                        title="Email"
                        value="Devashish@gmail.com"
                    />
                  
            
 
                </div>
                <div className="mt-4 flex flex-col xl:flex-row gap-2">
                    <CustomerProfileAction id={data.id} />
                </div>
            </div>
        </Card>
        <Card>

        <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
              <div className=' flex justify-between items-center '>

              <h5>Actions</h5> 
            <div>

            <Button
                block
                // icon={<HiPencilAlt />}
                variant="solid"
                
            >
                View Last Updates
            </Button>
            </div>
            </div>
              <div className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 gap-y-7 gap-x-6 mt-8">
        <FormItem
                label="Project Type"  
            >
                  <Select
                placeholder="Please Select"
                 options={leadStatus}
            ></Select>
            </FormItem>

            <FormItem label="To Follow Up On">
            <DateTimepicker placeholder="Pick date & time" />
            </FormItem>
            </div></div>
     <div className='flex items-center justify-between'>
            <FormItem
                label="Today's Update"
                labelClass="!justify-start"
                className='w-2/3'
            >
                <Input
                    placeholder="Invalid text area"
                    textArea
                />
            </FormItem>
            <div>
            <Button
                block
                // icon={<HiPencilAlt />}
                variant="solid"
                
            >
                Submit
            </Button>
            </div>
            </div>
        </Card>

        </div>

    )
}

export default CustomerProfile
