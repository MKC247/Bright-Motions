import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../store/auth-context';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import MainAppBar from './mainappBar';
import { Audio } from 'react-loader-spinner';
import HeaderCartButton from './LibraryCartIcon';
import Cart from './cart/cart';
import CartProvider from '../store/cartProvider';
import AutoItems from './AutoItems.jsx/AutoItem';
import RequestService from './requestService/requestService';



function Copyright() {


  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        BrightMotions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Library = () => {
  const [cdata, setData] = useState([]);
  const [loading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [cartIsShown, setCartIsShown] = useState(false);


  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  }



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://carpartdata-default-rtdb.firebaseio.com/alldata.json');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json()
      console.log(data);
      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,

        })
      }
      setData(loadedData);
      setIsloading(false);
    };
    fetchData().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });


  }, []);


  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);
  const logoutHandler = () => {
    authCtx.logout();
    window.location.href = '/';
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <ThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <div className='header'>
            <MainAppBar
              id2='#buyParts' header2={<button className='headerp'>BUY PARTS</button>}
              header3={<HeaderCartButton onShowCart={showCartHandler} />}
              header4={
                <button
                  onClick={logoutHandler}
                  className='logoutButton'>
                  LOGOUT
                </button>}
            />
          </div>
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
              }}
            >
              <Container
                maxWidth='lg'>
              </Container>

              <RequestService />

              <Container maxWidth="lg" sx={{ mt: '3rem' }}>

                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  id='buyParts'
                >
                  BUY PARTS
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  The following parts are available for purchase.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >

                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />




                </Stack>

              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                {httpError && (
                  <div className='loadingStatus'>
                    <p>{httpError}</p>
                  </div>
                )}
                {loading && (
                  <div className='loadingStatus'>
                    <Audio
                      height="80"
                      width="80"
                      radius="9"
                      color='blue'
                      ariaLabel='three-dots-loading'
                      wrapperStyle
                      wrapperClass
                    /></div>
                )}
                {!loading && (<>
                  {cdata.map((e) => (
                    <Grid item key={e.id} xs={12} sm={6} md={4}>
                    <AutoItems
                      id={e.id}
                      name={e.name}
                      description={e.description}
                      price={e.price}
                    />

                      
                    </Grid>

                  ))}
                </>
                )}

              </Grid>
            </Container>
          </main>
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            BrightMotions
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Always on the move
            </Typography>
            <Copyright />
          </Box>
        </div>







      </ThemeProvider>
    </CartProvider>
  );
};

export default Library;