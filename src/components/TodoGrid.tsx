import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Checkbox } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Home } from '@mui/icons-material';

import { TodoTypes } from '../types';
import { Button } from '../components';

const TodoGrid = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  const toggleStatus = (todoName: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.todoName === todoName ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const columns: GridColDef[] = [
    { field: 'todoName', headerName: 'Todo Name', width: 150 },
    { field: 'todoDescription', headerName: 'Description', width: 240 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (params.row.status ? 'Completed' : 'Not Done'),
    },
    {
      field: 'toggleStatus',
      headerName: 'Toggle Status',
      width: 150,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.status}
          onChange={() => toggleStatus(params.row.todoName)}
          color="primary"
        />
      ),
    },
  ];

  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
      <Box sx={{ height: 400, width: 650, margin: 'auto' }}>
        <DataGrid
          rows={todos}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.todoName}
        />
        <Button
          type="button"
          color="secondary"
          icon={<Home />}
          sx={{ mt: 2 }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    </Stack>
  );
};

export default TodoGrid;
