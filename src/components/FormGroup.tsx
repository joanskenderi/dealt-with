import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';

import { TodoFormInputs } from '../types';
import { InputField, SubmitButton, Toast } from '../components';
import { todoSchema } from '../schemas';

const FormGroup = () => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TodoFormInputs>({
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

  const onSubmit: SubmitHandler<TodoFormInputs> = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
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
      <SubmitButton>Add Todo</SubmitButton>
      <Toast
        open={open}
        handleClose={handleClose}
        message="Todo created successfully!"
      />
    </Box>
  );
};

export default FormGroup;
