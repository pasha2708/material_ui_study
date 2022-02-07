import { ShoppingBasket } from '@mui/icons-material';
import { Toolbar, AppBar, Typography, IconButton, Badge } from '@mui/material';

const Header = ({ handleCart, orderLen }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
          Mui Shop
        </Typography>
        <IconButton color='inherit' onClick={handleCart}>
          <Badge
            color="secondary"
            badgeContent={orderLen}
          >
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
