import { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

type TitleProps = {
  children: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <Typography
      variant="h4"
      component="h1"
      gutterBottom
      color="primary"
      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
    >
      {children} <CheckCircle color="success" />
    </Typography>
  );
};

export default Title;
