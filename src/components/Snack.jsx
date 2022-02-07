import { Alert, Snackbar } from '@mui/material';

const Snack = ({ isOpen, handleClose} ) => {

  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity='success' onClose={handleClose}>Товар добавлен в корзину!</Alert>
    </Snackbar>
  );
};

export default Snack;
