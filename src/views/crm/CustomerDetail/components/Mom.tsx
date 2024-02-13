import TBody from '@/components/ui/Table/TBody';
import THead from '@/components/ui/Table/THead';
import Table from '@/components/ui/Table/Table';
import Td from '@/components/ui/Table/Td';
import Th from '@/components/ui/Table/Th';
import Tr from '@/components/ui/Table/Tr';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi'
import { Button, Input } from '@/components/ui';
import { Customer } from '../store';
import { useNavigate } from 'react-router-dom';

type Item = {
  id: number;
  name: string;
  details: string;
};

const initialData: Item[] = [
  { id: 1, name: 'Item 1', details: 'Details for Item 1' },
  { id: 2, name: 'Item 2', details: 'Details for Item 2' },
  // Add more data as needed
];
type CustomerProfileProps = {
    data?: Partial<Customer>
}


const DetailsTable: React.FC<CustomerProfileProps>= ({data}) => {
    console.log(data);
    
  const [datas, setData] = useState<Item[]>(initialData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleRow = (id: number) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  const handleSort = (column: string) => {
    setSortColumn(column);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const sortedData = [...datas].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      return 0;
    });
    setData(sortedData);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredData = initialData.filter((item) =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setData(filteredData);
  };

  const renderSortButton = (column: string, label: string) => (
    <button
      className="flex items-center focus:outline-none"
      onClick={() => handleSort(column)}
    >
      {label}
      {sortColumn === column && (
        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
      )}
    </button>
  );
  const navigate=useNavigate()

  return (
    <div>
        <div className='flex justify-between items-center'>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="my-4 p-2 w-1/5 "
      />
      <Button variant='solid' onClick={() => navigate('/app/crm/project/momform')}>Add MOM</Button>
      </div>
      <Table className="min-w-full ">
        <THead>
          <Tr>
            <Th className="px-4">Actions</Th>
            <Th className="px-4">{renderSortButton('meetingdate', 'Meeting Date')}</Th>
            <Th className="px-4">{renderSortButton('source', 'Source')}</Th>
          </Tr>
        </THead>
        <TBody>
          {data.map((item) => [
            <Tr key={item.id}>
              <Td className="px-4"onClick={() => toggleRow(item.id)}>
                
                  {expandedRow === item.mom_id? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
              
              </Td>
              <Td className="px-4">{item.mom_id}</Td>
              <Td className="px-4">{item.source}</Td>
            </Tr>,
            expandedRow === item.id && (
              <div key={`details-${item.id}`}>
                <h1>Meeting date: {item.meetingdate}</h1>
                <p></p>
              </div>
            ),
          ])}
        </TBody>
      </Table>
    </div>
  );
};

export default DetailsTable;
