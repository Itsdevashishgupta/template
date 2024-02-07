import { forwardRef, useState } from 'react'
import { FormContainer, FormItem } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import hooks from '@/components/ui/hooks'
import StickyFooter from '@/components/shared/StickyFooter'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { Field, FieldProps, Form, Formik, FormikProps, FormikProvider, useFormik,FormikHelpers } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import PricingFields from './PricingFields'
import OrganizationFields from './OrganizationFields'
import ProductImages from './ProductImages'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'
import axios from 'axios'
import { AdaptableCard, RichTextEditor } from '@/components/shared'
import { Input, Select } from '@/components/ui'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type FormikRef = FormikProps<any>

type InitialData = {
      id?: string
    name?: string
    email?: string
    phone?: string
    location?: string
    status?: string
    source?: string
    content?: string
    createBy?: string
}

export type FormModel = Omit<InitialData, 'tags'> & {
    tags: { label: string; value: string }[] | string[]
}

export type SetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>

type OnDelete = (callback: OnDeleteCallback) => void

type ProductForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard?: () => void
    onDelete?: OnDelete
    onFormSubmit: (formData: FormModel, setSubmitting: SetSubmitting) => void
}

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Product Name Required'),
    price: Yup.number().required('Price Required'),
    stock: Yup.number().required('SKU Required'),
    category: Yup.string().required('Category Required'),
})

const DeleteProductButton = ({ onDelete }: { onDelete: OnDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                type="danger"
                title="Delete product"
                confirmButtonColor="red-600"
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
            >
                <p>
                    Are you sure you want to delete this product? All record
                    related to this product will be deleted as well. This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

const ProductForm = forwardRef<FormikRef, ProductForm>((props, ref) => {
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          email: '',
          location: '',
          status: '',
          source: '',
          content: '',
          createdBy: 'Admin',
          role:'Admin'
          
        },
        onSubmit: async (values,formikHelpers) => {
          try {
            // Make a POST request to your API endpoint
            
            setShowSuccessMessage(true);
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
            setTimeout(() => {
              setShowSuccessMessage(false);
              navigate('/app/leads')
            }, 2000);
            formik.initialValues.email='';
            const response = await axios.post('https://col-u3yp.onrender.com/v1/api/admin/create/lead/', values);
           
            
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        },
      });

      const projectStatus = [
        { value: 'followUp', label: 'Follow Up' },
        { value: 'interested', label: 'Interested' },
        { value: 'notInterested', label: 'Not Interested' },
        { value: 'noResponse', label: 'No Response' },
    ]
    const submit=()=>{
        
    }

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    

    return (
        <>
           <form onSubmit={formik.handleSubmit}>
               
                  <FormikProvider value={formik}>
                        <FormContainer>
                            <div className="grid grid-cols-1 lg:grid-cols gap-4">
                            <AdaptableCard divider className="mb-4">
            <h5>Basic Information</h5>
            <p className="mb-6">Section to config basic lead information</p>
            <div className='grid xl:grid-cols-3 xl:grid grid-cols-1 sm:grid-cols-2 :grid gap-5 '>
                <FormItem label='Name'>
                <Input placeholder="Name" name='name' id='name' 
                onChange={formik.handleChange} value={formik.values.name} />

                </FormItem>
                <FormItem label='Phone'>
                <Input placeholder="Phone" name='phone' id='phone' 
                onChange={formik.handleChange} value={formik.values.phone}/>

                </FormItem>
                <FormItem label='Email'>
                <Input placeholder="Email" name='email' id='email' 
                onChange={formik.handleChange} value={formik.values.email} />

                </FormItem>
               
                <FormItem label='Location'>
                <Input placeholder="Status" name='location' id='location' 
                onChange={formik.handleChange} value={formik.values.location} />

                </FormItem>
                <FormItem label='Status'>
                <Input placeholder="Status" name='status' id='status' 
                onChange={formik.handleChange} value={formik.values.status}/>

                </FormItem>
                <FormItem label='Source'>
                <Input placeholder="Source" name='source' id='source' 
                onChange={formik.handleChange} value={formik.values.source} />

                </FormItem>
                <FormItem label='Description'>
                <Input placeholder="Description" name='content' textArea id='content' 
                onChange={formik.handleChange} value={formik.values.content} />

                </FormItem>
                </div>
{/* 
            <FormItem
                        label="Project Id"
                        invalid={(errors.number && touched.number) as boolean}
                        errorMessage={errors.number}
                    >
                        <Field name="id">
                            {({ field, form }: FieldProps) => {
                                return (
                                    <NumericFormatInput
                                        form={form}
                                        field={field}
                                        placeholder="Stock"
                                        customInput={
                                            NumberInput as ComponentType
                                        }
                                        onValueChange={(e) => {
                                            form.setFieldValue(
                                                field.name,
                                                e.value
                                            )
                                        }}
                                    />
                                )
                            }}
                        </Field>
                    </FormItem> */}


        
 
        
        </AdaptableCard>
                                
                            </div>
                            <StickyFooter
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                              
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        
                                      
                                    >
                                        Discard
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="solid"
                                      
                                        icon={<AiOutlineSave />}
                                        type="submit"
                                      
                                    >
                                        Save
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                 
                        </FormikProvider>
                </form>
                {showSuccessMessage && (
        <ConfirmDialog isOpen={showSuccessMessage} type="success" title="Success" onClose={() => setShowSuccessMessage(false)}>
          <p>Data added successfully!</p>
        </ConfirmDialog>
      )}
        </>
    )
})

ProductForm.displayName = 'ProductForm'

export default ProductForm
