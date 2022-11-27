import React, { useState } from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px 10px;
    Cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #03002E;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin-top: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#ffac33'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`





const MainAppBar = (props) => {
    const [open, setOpen] = useState(false)
    const theme = createTheme();


     return(
        <ThemeProvider theme={theme}>
        <AppBar position='absolute'>
        <Toolbar sx={{
            bgcolor: '#03002E',
            position: 'fixed',
            width: '100%',
            height: 36,
            borderBottom: '1px solid black',
        }}>
            <div className='big-container'>
                <div className='logoContainer'>
                    <Typography variant='h6' sx={{
                        display: 'flex',
                        color: '#ffac33'
                    }}>
                    <div className='logoDiv'>
                    <img className='logoImg' src='logo.jpg' alt=''/>
                    </div>
                    <div className='maindivheader'>
                    BrightMotions
                    </div>
                      
                    </Typography>
                </div>
                <div>
                <Nav>
      <div className="logo">
      </div>
      <div onClick={()=>setOpen(!open)}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
      <li>
      <a className='navigation1ref' href={props.id1}><h4>{props.header1}</h4></a></li>
      <li>
      <a className='navigation1ref' href={props.id2}><h4>{props.header2}</h4></a>
      </li>

      <li>
      <a className='navigation1ref' href={props.id3}><h4>{props.header3}</h4></a>
      </li>
      <li>
      <a className='navigation1ref' href={props.id4}><h4>{props.header4}</h4></a>
      </li>
    </Ul>    </div>    </Nav>                </div>
            </div>
        </Toolbar>
    </AppBar>
    </ThemeProvider>
     )
}
export default MainAppBar;