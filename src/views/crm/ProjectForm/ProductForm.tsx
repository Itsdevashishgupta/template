import { forwardRef, useState } from 'react'
import { FormContainer, FormItem } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import hooks from '@/components/ui/hooks'
import StickyFooter from '@/components/shared/StickyFooter'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import {
    Field,
    FieldProps,
    Form,
    Formik,
    FormikProps,
    FormikProvider,
    useFormik,
    FormikHelpers,
} from 'formik'
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
    lead_id: '833500'
    client_name?: string
    client_email?: string
    client_contact?: string
    location?: string
    description?: string
    project_type?: string
    project_name?: string
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
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            lead_id: '833500',
            client_name: '',
            client_email: '',
            client_contact: '',
            location: '',
            description: '',
            project_type: '',
            project_name: '',
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                console.log(values)
                // Make a POST request to your API endpoint
                const response = await axios.post(
                    'https://col-u3yp.onrender.com/v1/api/admin/create/lead/project',
                    values,
                )
                setShowSuccessMessage(true)
                formikHelpers.setSubmitting(false)
                // formikHelpers.resetForm()
                setTimeout(() => {
                    setShowSuccessMessage(false)
                    // navigate('/app/leads')
                }, 2000)
            } catch (error) {
                console.error('Error submitting form:', error)
            }
        },
    })

    const submit = () => {}

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <FormikProvider value={formik}>
                    <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols gap-4">
                            <AdaptableCard divider className="mb-4">
                                <h5>Basic Information</h5>
                                <p className="mb-6">
                                    Section to config basic lead information
                                </p>
                                <div className="grid xl:grid-cols-3 xl:grid grid-cols-1 sm:grid-cols-2 :grid gap-5 ">
                                    <FormItem>
                                        <Input
                                            type="hidden"
                                            name="lead_id"
                                            value="833500"
                                        />
                                    </FormItem>
                                    <FormItem label="Name">
                                        <Input
                                            placeholder="Name"
                                            name="client_name"
                                            id="client_name"
                                            onChange={formik.handleChange}
                                            value={formik.values.client_name}
                                        />
                                    </FormItem>
                                    <FormItem label="Phone">
                                        <Input
                                            placeholder="Phone"
                                            name="client_contact"
                                            id="client_contact"
                                            onChange={formik.handleChange}
                                            value={formik.values.client_contact}
                                        />
                                    </FormItem>
                                    <FormItem label="Email">
                                        <Input
                                            placeholder="Email"
                                            name="client_email"
                                            id="client_email"
                                            onChange={formik.handleChange}
                                            value={formik.values.client_email}
                                        />
                                    </FormItem>

                                    <FormItem label="Location">
                                        <Input
                                            placeholder="Location"
                                            name="location"
                                            id="location"
                                            onChange={formik.handleChange}
                                            value={formik.values.location}
                                        />
                                    </FormItem>
                                    <FormItem label="Project Type">
                                        <Input
                                            placeholder="Project Type"
                                            name="project_type"
                                            id="project_type"
                                            onChange={formik.handleChange}
                                            value={formik.values.project_type}
                                        />
                                    </FormItem>
                                    <FormItem label="Project Name">
                                        <Input
                                            placeholder="project name"
                                            name="project_name"
                                            id="project_name"
                                            onChange={formik.handleChange}
                                            value={formik.values.project_name}
                                        />
                                    </FormItem>
                                    <FormItem label="Description">
                                        <Input
                                            placeholder="Description"
                                            name="description"
                                            id="description"
                                            onChange={formik.handleChange}
                                            value={formik.values.description}
                                        />
                                    </FormItem>
                                </div>
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
                <ConfirmDialog
                    isOpen={showSuccessMessage}
                    type="success"
                    title="Success"
                    onClose={() => setShowSuccessMessage(false)}
                >
                    <p>Data added successfully!</p>
                </ConfirmDialog>
            )}
        </>
    )
})

ProductForm.displayName = 'ProductForm'

export default ProductForm
