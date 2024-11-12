import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { AddCircle, RemoveRedEye } from '@mui/icons-material';
import { zodResolver } from '@hookform/resolvers/zod';

import { TodoTypes } from '../types';
import { InputField, Button, Toast } from '../components';
import { todoSchema } from '../schemas';

const FormGroup = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TodoTypes>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      todoName: '',
      todoDescription: '',
      status: false,
    },
  });

  const fields = [
    { name: 'todoName', label: 'Todo Name', error: errors.todoName },
    {
      name: 'todoDescription',
      label: 'Todo Description',
      error: errors.todoDescription,
      multiline: true,
      rows: 4,
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<TodoTypes> = (data) => {
    const newTodo = { id: Date.now(), ...data };
    const existingTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    existingTodos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
    setOpen(true);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 350,
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: 'background.paper',
      }}
    >
      {fields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          control={control}
          label={field.label}
          error={field.error}
          multiline={field.multiline}
          rows={field.rows}
        />
      ))}
      <Button color="primary" icon={<AddCircle />}>
        Add Todo
      </Button>
      <Button
        type="button"
        color="secondary"
        icon={<RemoveRedEye />}
        onClick={() => navigate('/todos')}
      >
        View all Todos
      </Button>
      <Toast
        open={open}
        handleClose={handleClose}
        message="Todo created successfully!"
      />
    </Box>
  );
};

export default FormGroup;
