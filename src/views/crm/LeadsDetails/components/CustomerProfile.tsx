import React, { useEffect, useState } from 'react'
import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import dayjs from 'dayjs'
import type { MouseEvent } from 'react'
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
import { Dialog, FormItem, Input } from '@/components/ui'

import DateTimepicker from '@/components/ui/DatePicker/DateTimepicker'
import { Field, FieldProps, FormikProvider, useFormik } from 'formik'
import { RichTextEditor } from '@/components/shared'
import axios, { AxiosResponse } from 'axios'
import { log } from 'console'
import { MenuItem, OutlinedInput, Select, useTheme,Theme, SelectChangeEvent, FormControl, InputLabel } from '@mui/material'
import { values } from 'lodash'


type CustomerInfoFieldProps = {
    title?: string
    value?: string
}

type CustomerProfileProps = {
    data?: Partial<Customer>
}
type InitialData= {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    status?: string;
    source?: string;
    content?: string;
    createBy?: string;
    lead_id?:string
    
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





const CustomerProfile = ({myParam}) => {
    const [datas, setData] = useState<InitialData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(myParam);
        const response = await fetch(`https://col-u3yp.onrender.com/v1/api/admin/getsingle/lead/?lead_id=${myParam}`);
        const jsonData = await response.json();
        setData(jsonData)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    
    
    // Form data
    fetchData();
}, []);
    const leadStatus = [
        { value: 'followUp', label: 'Follow Up' },
        { value: 'interested', label: 'Interested' },
        { value: 'notInterested', label: 'Not Interested' },
        { value: 'noResponse', label: 'No Response' },
    ]
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const formik = useFormik({
        initialValues: {
          lead_id:'797856' ,
          status:"",
          date:"",
          content:"",
          createdBy:"Devashish"
          
          
        },
        onSubmit: async (values,formikHelpers) => {
          try {
            // Make a POST request to your API endpoint
            console.log(values);
            console.log(values);
            
            setShowSuccessMessage(true);
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
            setTimeout(() => {
              setShowSuccessMessage(false);
              
            }, 2000);
           console.log("hello");
           
            const response = await axios.put('https://col-u3yp.onrender.com/v1/api/admin/update/lead/', values);
            
           
            
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        },
      });
      
      const exampleDate:Date=new Date();
     const formattedDateTimeString: string = dayjs(exampleDate).format('MM/DD/YYYY HH:mm:ss');


     const ITEM_HEIGHT = 48;
     const ITEM_PADDING_TOP = 8;
     const MenuProps = {
       PaperProps: {
         style: {
           maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
           width: 250,
         },
       },
     };
     
     
     function getStyles(name: string, personName: string[], theme: Theme) {
       return {
         fontWeight:
           personName.indexOf(name) === -1
             ? theme.typography.fontWeightRegular
             : theme.typography.fontWeightMedium,
       };
     }


     const theme = useTheme();
     const [personName, setPersonName] = React.useState<string[]>([]);
   
     const handleChange = (event: SelectChangeEvent<typeof personName>) => {
       const {
         target: { value },
       } = event;
       setPersonName(
         // On autofill we get a stringified value.
         typeof value === 'string' ? value.split(',') : value,
       );
     }

     
 
// view Last Update

const [update, setUpdate] = useState<InitialData | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(myParam);

      const response = await axios.get('https://col-u3yp.onrender.com/v1/api/admin/getsingle/lead/?lead_id=797856');
      
      // Assuming your API response has a structure like { data: [{ notes: ... }] }
      const jsonData = response.data;

      console.log(jsonData.data);

      setUpdate(jsonData);
      console.log(customer);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  
  

  // Form data
  fetchData();
}, [update]);




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



    
    return (
        <div className=' flex flex-col gap-3'>
        <Card>
            <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
              <h5>Basic Information</h5>
                <div className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 gap-y-7 gap-x-4 mt-8">
                    
                <CustomerInfoField
                        title="Name"
                        // value={datas.data[0].name}
                        value={update?.data.notes[0]}
                      
                    />
                    <CustomerInfoField
                        title="Email"
                      
                    />
                     <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
               <ul>
              
            </ul>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        variant="plain"
                        onClick={onDialogClose}
                    >
                        Cancel
                    </Button>
                    <Button variant="solid" onClick={onDialogOk}>
                        Okay
                    </Button>
                </div>
            </Dialog>
            
 
                </div>
                <div className="mt-4 flex flex-col xl:flex-row gap-2">
                   
                </div>
            </div>
        </Card>
        <Card>

        <div className=' flex justify-between items-center '>

<h5>Actions</h5> 
<div>

<Button
  
  // icon={<HiPencilAlt />}
  variant="solid"
  onClick={() => openDialog()}
>
  View Last Updates
</Button>
</div>
</div>
        <form onSubmit={formik.handleSubmit}>
               
               <FormikProvider value={formik}>
        <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[360px] mx-auto">
              

             
              <div className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 gap-y-7 gap-x-6 mt-8">
        <FormItem
                label="Project Status"  
            >
                    <div>
   
        <select
        name='status'
      value={formik.values.status}
      onChange={formik.handleChange}
      placeholder='Status'
      className='
        block
        w-full
        px-4
        py-2
        border
        border-gray-300
        rounded-md
        shadow-sm
        focus:outline-none
        focus:ring
        focus:border-blue-300
        
      '
    >
        <option value="Follow Up">Follow Up</option>
          <option value="Interested">Interested</option>
          <option value="Not Interested">Not Interested</option>
          <option value="No Response">No Response</option>
    </select>
     
    </div>
            </FormItem>

            <FormItem label="To Follow Up On">
            <DateTimepicker placeholder="Pick date & time" type='text' name='date' value={formik.values.date ? new Date(formik.values.date) : null} onChange={(date: Date | null) => {
      // The date parameter will be of type 'Date | null'
      formik.setFieldValue('date', date); // Update the formik value
    }} />
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
                    value={formik.values.content}
                    name='content'
                    onChange={formik.handleChange}
                />
            </FormItem>
            <div>
            <Button
                block
                // icon={<HiPencilAlt />}
                variant="solid"
                type='submit'
                
            >
                Submit
            </Button>
            </div>
           
            </div>
            </FormikProvider>
            </form>
        </Card>
        {showSuccessMessage && (
        <ConfirmDialog isOpen={showSuccessMessage} type="success" title="Success" onClose={() => setShowSuccessMessage(false)}>
          <p>Data added successfully!</p>
        </ConfirmDialog>
      )}
        </div>

    )
}

export default CustomerProfile
