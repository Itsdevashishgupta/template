import AdaptableCard from '@/components/shared/AdaptableCard'
import RichTextEditor from '@/components/shared/RichTextEditor'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'
import { DatePicker } from '@/components/ui'

type FormFieldsName = {
    name: string
    productCode: string
    description: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields) => {
    const { touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Basic Information</h5>
            <p className="mb-6">Section to config basic product information</p>
            <FormItem
                label="Project Name"
                invalid={(errors.name && touched.name) as boolean}
                errorMessage={errors.name}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="project_name"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Project Type"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="project_type"
                    placeholder="Proejct Type"
                    component={Input}
                />
            </FormItem>


        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                <FormItem
                label="Lead Manager"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="leadmanager"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
                    </div>
                    <div className='col-span-1'>
                    <FormItem
                label="Junior Designer"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="junior_designer"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
                    </div>
                    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                <FormItem
                label="Supervisor"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="superviser"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
                    </div>
                    <div className='col-span-1'>
                    <FormItem
                label="Visualizer"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="visualizer"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
                    </div>
                    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                <FormItem
                label="Senior Designer"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="senior_designer"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
                    </div>
                    <div className='col-span-1'>
                    <FormItem
                label="Location"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="project_location"
                    placeholder="Location"
                    component={Input}
                />
            </FormItem>
                    </div>
                    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                <FormItem
                label="Project Start Date"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <DatePicker
                    name="project_start_date"
                    placeholder="YYYY-MM-DD"
                    
                />
            </FormItem>
                    </div>
                    <div className='col-span-1'>
                    <FormItem
                label="Project End Date"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                  <DatePicker
                    name="project_start_date"
                    placeholder="YYYY-MM-DD"
                    
                />
            </FormItem>
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                <FormItem
                label="Project Budget"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="project_budget"
                    placeholder="Budget"
                    component={Input}
                />
            </FormItem>
                    </div>
                    <div className='col-span-1'>
                    <FormItem
                label="Proejct Status"
                invalid={(errors.productCode && touched.productCode) as boolean}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="project_status"
                    placeholder="Status"
                    component={Input}
                />
            </FormItem>
                    </div>
                    </div>


                    <FormItem
                label="Description"
                labelClass="!justify-start"
                invalid={(errors.description && touched.description) as boolean}
                errorMessage={errors.description}
            >
                <Field name="description">
                    {({ field, form }: FieldProps) => (
                        <RichTextEditor
                            value={field.value}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        />
                    )}
                </Field>
            </FormItem>
        
        </AdaptableCard>
    )
}

export default BasicInformationFields
