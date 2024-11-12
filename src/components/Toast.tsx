import { Alert, Snackbar } from '@mui/material';

type ToastProps = {
  open: boolean;
  handleClose: () => void;
  message: string;
};

const Toast = ({ open, handleClose, message }: ToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
