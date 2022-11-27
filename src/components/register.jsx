import React, {useState, useContext} from "react";
import AuthContext from "../store/auth-context";

const RegisterPage = ()=>{
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const authCtx = useContext(AuthContext);
  const [buttonText, setButtonText]=useState('SUBMIT');

  function isValidEmail() {
    return /\S+@\S+\.\S+/.test(email);
  }


  const handleChange = () => {
    setButtonText('loading...');
    if (!isValidEmail(email)) {
      alert('Email is invalid');
      setButtonText('Submit');
    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTv42i6dYMpWZGYiogDxi5TBUEjVahLhY',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }

      }).then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            return response.json().then(data =>{
                let errorMessage = 'Authentication failed';
                throw new Error(errorMessage);
            })
        }
    }).then((data) => {
      const expirationTime = new Date(new Date().getTime()+ (+data.expiresIn*1000));
      authCtx.login(data.idToken, expirationTime.toISOString());
      window.location.href = '/library';

    }).catch((err)=>{
      setButtonText('Submit');
      alert(err.message);
    });
  };
  }
  

return (
  <div className="loginform1">
  <div className="loginform2">
  <form className="login3form">
    <h1>CREATE AN ACCOUNT</h1>

    <div className="formInput1">
      <label>Email: </label>
      <input
        type="text"
        onChange={e => setEmail(e.target.value)}
        id=""
      />
    </div>
    <div className="formInput1">
      <label>Password: </label>
      <input
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        id=""
      />
    </div>
    <button className="submitbutton" type="button" onClick={e=>handleChange()}>
      {buttonText}
    </button>
    <a href="/login">Already have an account?</a>
  </form>
  </div>
  
</div>
  );
};
export default RegisterPage;