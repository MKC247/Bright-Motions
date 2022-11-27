import React from 'react';
import { Stack, createTheme, Box, Typography, Button, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import Information from './imformation';
import Choice from './choice';
import BuildIcon from '@mui/icons-material/Build';
import OtherService from './otherService';
import ContactUs from './contactUs';
import Socials from './socials';
import Mycarousel from './carousel'
import MainAppBar from './mainappBar';
import { Fragment } from 'react';

const theme = createTheme({
    palette: {
        background: {
            paper: '#F9F9F9',
            light: '#ffac33',
            main: '#007bb2',
            dark: '#03002E',
            contrastText: '#cfd8dc',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
            light: '#ffac33',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
});

const HomeBody = () => {
    return (
        <Fragment>
        <ThemeProvider theme={theme}>
            <div className='main_container'>
                <div className='mainContainerFilter'>
                    <Box
                        sx={{
                            fontFamily: 'theme.typography.fontFamily.Arial',
                            pt: 0,
                            minWidth: '100%',
                            height: '100vh',

                        }}>
                        <MainAppBar id1='#aboutus' header1='ABOUT US'
                            id2='#services' header2='SERVICES'
                            id3='#otherservices' header3='OTHER SERVICES'
                            id4='#contactus' header4='CONTACT US'
                        />
                        

                        <div className='bodyContainer'>
                            <Typography component='h1' variant='h4' align='center' sx={{ fontWeight: 'bold', color: 'text.light' }} gutterBottom>
                                GET YOUR CAR RUNNING!
                            </Typography>
                            <Typography variant='h5' align='center' sx={{ color: 'text.contrastText' }} paragraph>
                                Stuck? Need remote repairs? Parts replacement? Diagnostics? <br />Our mechanics are up to task always and everywhere at your request.
                            </Typography>
                            <Stack sx={{ pt: 12 }}
                                direction='row'
                                spacing={2}
                                justifyContent='center'>
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <Button size='large' variant='contained' sx={{ color: 'text.primary', bgcolor: 'background.light' }}>SignIn</Button>
                                </Link>
                                <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <Button size='large' variant='outlined' sx={{ color: 'text.light' }}>SignUp</Button>
                                </Link>
                            </Stack>
                        </div>
                    </Box>
                </div>
            </div>
            <div id='aboutus'>
                <Information />
            </div>
            <div className='MiscellaneousContainer'>
                <div id='services' className='rotatedContentContainer'>
                    <Choice />
                </div>
            </div>
            <div id='otherservices' className='carouselContainer'>
                <div className='carousel1'>
                    <div className='carouselContainerInfo'>

                        <div className='mainServiceOfferedContainer'>
                            <div className='servicesOfferedContainer'>
                                <h4>SERVICES WE OFFER</h4>
                            </div>
                        </div>
                        <div className='mainBuildIconContainer'>
                            <div className='buildIconContainer'>
                                <BuildIcon sx={{ color: 'background.dark', fontSize: '60px' }} />
                            </div>
                        </div>
                        <div className='mainCarouselContainerInfo'>
                            <div className='carouselInformationContainer'>
                                <Mycarousel />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel2'>
                </div>
                <div className='carouselContainerInfo'>
                    <div className='service2'>
                        <h2>OTHER SERVICES</h2>
                    </div>
                    <div className='quickfix1'>
                        <div className='filter2'>
                            <div className='filter3'>
                                <h1>QUICK FIXES</h1>
                                <ul>
                                    <li>water pump replacement</li>
                                    <li>Thermostat Replacement</li>
                                    <li>Transmition fluid replacement</li>
                                    <li>Rear wheel drum and brake line replacement</li>
                                    <li>Differential Repair and replacement</li>
                                    <li>Front wheel tie rod and Rockend</li>
                                    <li>Engine diagnostics</li>
                                    <li>ball joint replacement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contactus' className='otherServiceContainer'>
                <div className='contactContainer'>
                    <ContactUs />
                </div>
                <OtherService />
            </div>
            <Socials />
        </ThemeProvider>
        </Fragment>
    )
}

export default HomeBody;
export { theme };