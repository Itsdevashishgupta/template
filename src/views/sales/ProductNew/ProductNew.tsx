import ProductForm, {
    FormModel,
    SetSubmitting,
} from '@/views/sales/ProductForm'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useNavigate } from 'react-router-dom'
import { apiCreateSalesProduct } from '@/services/SalesService'
import ProductImages from '@/views/sales/ProductForm/ProductImages'
import BasicInformationFields from '@/views/sales/ProductForm/BasicInformationFields'

const ProductNew = () => {
    const navigate = useNavigate()

    const addProduct = async (data: FormModel) => {
        const response = await apiCreateSalesProduct<boolean, FormModel>(data)
        return response.data
    }

    const handleFormSubmit = async (
        values: FormModel,
        setSubmitting: SetSubmitting
    ) => {
        setSubmitting(true)
        const success = await addProduct(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Project successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/app/leads')
        }
    }

    const handleDiscard = () => {
        navigate('/app/leads')
    }

    return (
        <>
            {/* <ProductForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
                
            /> */}
            <ProductImages/>
            {/* <BasicInformationFields/> */}
        </>
    )
}

export default ProductNew
