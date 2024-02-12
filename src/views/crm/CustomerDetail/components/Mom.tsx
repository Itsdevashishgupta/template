import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, FormContainer, FormItem, Input, Select } from '@/components/ui';
import  ValueType  from 'react-select';

interface FormData {
    client_name: string[];
    organisor: string[];
    architect: string[];
    consultant_name: string[];
  meetingDate: string;
  source: string;
  remark: string;
  imaportant_note: string;
  file: string;
}

const YourFormComponent: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Create an object to store and map the query parameters
  const allQueryParams = {
    project_id: queryParams.get('project_id') || '',
    mom_id: queryParams.get('mom_id') || '',
    meetingDate: queryParams.get('meetingDate') || '',
    source: queryParams.get('source') || '',
    client_name: queryParams.get('client_name')?.split(',') || [],
    organisor: queryParams.get('organisor')?.split(',') || [],
    architect: queryParams.get('architect')?.split(',') || [],
    consultant_name: queryParams.get('consultant_name')?.split(',') || [],
    remark: queryParams.get('remark') || '',
    imaportant_note: queryParams.get('imaportant_note') || '',
    file: queryParams.get('file') || '',
  };

  const initialFormData: FormData = {
    client_name: allQueryParams.client_name,
    organisor: allQueryParams.organisor,
    architect: allQueryParams.architect,
    consultant_name: allQueryParams.consultant_name,
    meetingDate: allQueryParams.meetingDate,
    source: allQueryParams.source,
    remark: allQueryParams.remark,
    imaportant_note: allQueryParams.imaportant_note,
    file: allQueryParams.file,
  };
  const clientOptions = [
    { value: 'Abhishek Singh', label: 'Abhishek Singh' },
    // ... (other options)
  ];

  const organisorOptions = [
    // ... (organisor options)
  ];

  const architectOptions = [
    // ... (architect options)
  ];

  const consultantOptions = [
    { value: 'Naveen', label: 'Naveen' },
    // ... (other options)
  ];

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const [selectedClients, setSelectedClients] = useState<ValueType<{ value: string; label: string }>>(null);
  const [selectedOrganisors, setSelectedOrganisors] = useState<ValueType<{ value: string; label: string }>>(null);
  const [selectedArchitects, setSelectedArchitects] = useState<ValueType<{ value: string; label: string }>>(null);
  const [selectedConsultants, setSelectedConsultants] = useState<ValueType<{ value: string; label: string }>>(null);

  const handleSelectChange = (
    selectedOption: ValueType<{ value: string; label: string }>,
    fieldName: string
  ) => {
    const selectedValues = Array.isArray(selectedOption)
      ? selectedOption.map((option) => option.value)
      : selectedOption
      ? [selectedOption.value]
      : [];

    setFormData({
      ...formData,
      [fieldName]: selectedValues,
    });

    setErrors({
      ...errors,
      [fieldName]: '',
    });
  };


  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors: { [key: string]: string } = {};

    // Add your validation rules here...

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Assuming you have an API endpoint for updating projects with mom details
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'PUT', // Assuming it's a PUT request for updating the project
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_id: allQueryParams.project_id,
          mom_id: allQueryParams.mom_id,
          mom: {
            mom_id: allQueryParams.mom_id,
            meetingdate: formData.meetingDate,
            source: formData.source,
            attendees: {
              client_name: formData.client_name,
              organisor: formData.organisor,
              architect: formData.architect,
              consultant_name: formData.consultant_name,
            },
            remark: formData.remark,
            imaportant_note: formData.imaportant_note,
            files: formData.file,
          },
        }),
      });

      if (response.ok) {
        // Project update successful, show success alert
        alert('Project update successful');
        navigate(-1);
      } else {
        // Project update failed, show error alert
        alert('Project update failed');
      }
    } catch (error) {
      // Handle any other errors
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h5>MOM Details</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <div className='grid grid-cols-2 gap-5'>
          <FormItem label="Client's Name">
          <Select
            options={clientOptions}
            value={selectedClients}
            isMulti
            onChange={(selectedOption) => handleSelectChange(selectedOption, setSelectedClients, 'client_name')}
          />
          {errors.client_name && <span className='text-red-500'>{errors.client_name}</span>}
        </FormItem>
        <FormItem label='Organisor'>
          <Select
            options={organisorOptions}
            value={selectedOrganisors}
            isMulti
            onChange={(selectedOption) => handleSelectChange(selectedOption, setSelectedOrganisors, 'organisor')}
          />
          {errors.organisor && <span className='text-red-500'>{errors.organisor}</span>}
        </FormItem>
        <FormItem label='Architect'>
          <Select
            options={architectOptions}
            value={selectedArchitects}
            isMulti
            onChange={(selectedOption) => handleSelectChange(selectedOption, setSelectedArchitects, 'architect')}
          />
          {errors.architect && <span className='text-red-500'>{errors.architect}</span>}
        </FormItem>
        <FormItem label='Consultant Name'>
          <Select
            options={consultantOptions}
            value={selectedConsultants}
            isMulti
            onChange={(selectedOption) => handleSelectChange(selectedOption, setSelectedConsultants, 'consultant_name')}
          />
          {errors.consultant_name && <span className='text-red-500'>{errors.consultant_name}</span>}
        </FormItem>
            <FormItem label='Meeting Date'>
              <Input type='date' name='meetingDate' value={formData.meetingDate} onChange={handleInputChange} />
              {errors.meetingDate && <span className='text-red-500'>{errors.meetingDate}</span>}
            </FormItem>
            <FormItem label='Source'>
              <Input name='source' value={formData.source} onChange={handleInputChange} />
              {errors.source && <span className='text-red-500'>{errors.source}</span>}
            </FormItem>
            <FormItem label='Remark'>
              <Input name='remark' value={formData.remark} onChange={handleInputChange} />
              {errors.remark && <span className='text-red-500'>{errors.remark}</span>}
            </FormItem>
            <FormItem label='Important Note'>
              <Input name='imaportant_note' value={formData.imaportant_note} onChange={handleInputChange} />
              {errors.imaportant_note && <span className='text-red-500'>{errors.imaportant_note}</span>}
            </FormItem>
            <FormItem label='File'>
              <Input name='file' value={formData.file} onChange={handleInputChange} />
              {errors.file && <span className='text-red-500'>{errors.file}</span>}
            </FormItem>
          </div>
          <Button size='sm' variant='solid' type='submit'>
            Submit
          </Button>
        </FormContainer>
      </form>
    </div>
  );
};

export default YourFormComponent;
