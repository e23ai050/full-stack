import React, { useState, useMemo } from 'react';
import { MantineReactTable } from 'mantine-react-table';
import { MantineProvider } from '@mantine/core';


const initialData = [
  { firstName: 'Adhi', lastName: 'Singh', age: 20, city: 'Kollam' },
  { firstName: 'Abu', lastName: 'Shefin', age: 21, city: 'Malappuram' },
  { firstName: 'Shahil', lastName: 'Mohammed', age: 20, city: 'Makkada' },
  { firstName: 'Mohammed', lastName: 'Sanah', age: 23, city: 'Makkaraparamba' },
];


const columns = [
  { accessorKey: 'firstName', header: 'First Name', size: 150 },
  { accessorKey: 'lastName', header: 'Last Name', size: 150 },
  { accessorKey: 'age', header: 'Age', size: 80 },
  { accessorKey: 'city', header: 'City', size: 150 },
];

export default function App() {
  const [data, setData] = useState(initialData);

  
  const memoColumns = useMemo(() => columns, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ padding: 20 }}>
        <h2>Mantine React Table Example</h2>
        <MantineReactTable
          columns={memoColumns}
          data={data}
          enableSorting
          enableColumnFilters
          enablePagination
          enableRowSelection
          initialState={{ pagination: { pageSize: 2, pageIndex: 0 } }}
          getRowId={(row) => row.firstName + row.lastName} // unique ID
        />
      </div>
    </MantineProvider>
  );
}
