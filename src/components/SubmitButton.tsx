import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

type SubmitButtonProps = {
  children: ReactNode;
};

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      startIcon={<AddCircle />}
      sx={{
        padding: 1.5,
        fontSize: '1rem',
        boxShadow: 3,
      }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
