import { ReactNode } from 'react';
import { Button as MUIButton } from '@mui/material';

type ButtonProps = {
  children: ReactNode;
  color: 'primary' | 'secondary';
  icon: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  sx?: object;
};

const Button = ({
  children,
  color,
  icon,
  onClick,
  type = 'submit',
  sx = {},
}: ButtonProps) => {
  return (
    <MUIButton
      type={type}
      variant="contained"
      color={color}
      fullWidth
      startIcon={icon}
      sx={{
        padding: 1.5,
        fontSize: '1rem',
        boxShadow: 3,
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
