import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from '@/components/ui/DatePicker/DatePicker';
import axios from 'axios';
import { Button, FormItem, Input } from '@/components/ui';
import { useNavigate } from 'react-router-dom';
import { StickyFooter } from '@/components/shared';

const options = [
  { value: 'Follow Up', label: 'Follow Up' },
  { value: 'Interested', label: 'Interested' },
  { value: 'Not Interested', label: 'Not Interested' },
  { value: 'NO Response', label: 'NO Response' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  status: string | null;
  source: string;
  content: string;
  createdBy: string;
  role: string;
  date: string | null;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    status: null,
    source: '',
    content: '',
    createdBy: 'ADMIN',
    role: 'ADMIN',
    date: null,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string | { value: string; label: string } | Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]:
        field === 'date' && value instanceof Date
          ? value.toISOString().split('T')[0]
          : field === 'status' && typeof value === 'object'
          ? value.value
          : value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    // Basic validation for required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.location.trim()) newErrors.location = 'Location is required.';
    if (!formData.status) newErrors.status = 'Status is required.';
    if (!formData.date) newErrors.date = 'Date is required.';

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address.';
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/;
    const trimmedPhone = formData.phone.trim();
    if (trimmedPhone && (!phonePattern.test(trimmedPhone) || formData.phone !== trimmedPhone)) {
      newErrors.phone = 'Invalid phone number (10 digits only, no spaces, and no leading/trailing spaces).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const navigate=useNavigate()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make a POST request using axios
        alert('Success! Form submitted successfully.');
        navigate('/app/leads')
        const response = await axios.post('https://col-u3yp.onrender.com/v1/api/admin/create/lead/', formData);

        // Handle success
        if (response.status === 200) {
          alert('Success! Form submitted successfully.');
             navigate('/app/leads')
        }
      } catch (error) {
        // Handle error
        alert(`Error: ${error.message}`);
      }
    } else {
      alert('Form contains validation errors. Please check and submit again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormItem label='Name'>
        
          <Input
          size='sm'
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </FormItem>
        <span className=' text-red-600'>{errors.name}</span>
      </div>
      

      <div>
        <FormItem label='Email'>
          
          <Input
          size='sm'
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </FormItem>
        <span className=' text-red-600'>{errors.email}</span>
      </div>
      

      <div>
        <FormItem label='Phone'>
          
          <Input
          size='sm'
            type="text"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </FormItem>
        <span className=' text-red-600'>{errors.phone}</span>
      </div>
      

      <div>
        <FormItem label='Location'>

          <Input
            type="text"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </FormItem>
        <span className=' text-red-600'>{errors.location}</span>
      </div>
      

      <div>
        <FormItem label='Status'>
          
          <Select
            options={options}
            value={options.find((option) => option.value === formData.status)}
            onChange={(selectedOption) => handleChange('status', selectedOption)}
          />
        </FormItem>
        <span className=' text-red-600'>{errors.status}</span>
      </div>
      

      <div>
        <FormItem label='Date'>
          
          <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={(date) => handleChange('date', date)}
          />
        </FormItem>
        <span className=' text-red-600'>{errors.date}</span>
      </div>
      

      <div>
        <FormItem label='Source'>
          
          <Input
            type="text"
            value={formData.source}
            onChange={(e) => handleChange('source', e.target.value)}
          />
        </FormItem>
      </div>
      

      <div>
        <FormItem label='Description'>
        <Input
          value={formData.content}
          onChange={(e) => handleChange('content', e.target.value)} textArea/>  
        </FormItem>
      </div>
      

      <StickyFooter
                            className="-mx-8 px-8 flex items-center justify-between py-4"
                            stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        >
                            <div className="md:flex items-center">
                              
                                <Button
                                    size="sm"
                                    variant="solid"
                                   
                                    type="submit"
                                >
                                    Submit
                                </Button>
                              
                            </div>
                        </StickyFooter>
    </form>
  );
};

export default LeadForm;
