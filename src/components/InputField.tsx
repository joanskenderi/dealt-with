import { Control, Controller, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

interface TextFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  error?: FieldError;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
}

const InputField = ({
  name,
  control,
  label,
  error,
  multiline = false,
  rows,
  fullWidth = true,
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          error={!!error}
          helperText={error?.message}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default InputField;
