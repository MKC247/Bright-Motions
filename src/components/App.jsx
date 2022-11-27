import React, {Suspense} from 'react';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import {Routes,Route} from "react-router-dom";
import { Audio } from  'react-loader-spinner';


const Register = React.lazy(()=>import('./register'));
const LoginPage = React.lazy(()=>import('./login'));
const NotFound = React.lazy(()=>import('./NotFound'));
const Library = React.lazy(()=>import('./library'));
const HomePage = React.lazy(()=>import('./home'));
const QuickFix = React.lazy(()=>import('./quickfix'));
const Adminpage = React.lazy(()=>import('./adminpage'));

function App() {
  const authCtx = useContext(AuthContext);

  return ( 
    <Suspense fallback={
      <div className='centered'>
      <Audio
       height = "80"
       width = "80"
       radius = "9"
       color = 'blue'
       ariaLabel = 'three-dots-loading'     
       wrapperStyle
       wrapperClass
     />
      </div>
      }>  
  <Routes>
    { authCtx.isLoggedIn && (
      <Route path='library/users/mainadmin' element={<Adminpage />}/>
    )}
    { authCtx.isLoggedIn && (
      <Route path='/library' element={<Library />}/>
    )}
    { authCtx.isLoggedIn && (
      <Route path='/library/service' element={<QuickFix />}/>
    )}
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<LoginPage />}/>
    <Route path='/' element={<HomePage />}></Route>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  </Suspense>

  );
}

export default App;
