import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { message } from 'antd';

function GoogleAuth(setGoogleId) {
  const [isLogged, setIsLogged] = useState(false);

  const login = (res) => {
    console.log(res);

    if (res.googleId) {
      setIsLogged(true);
      setGoogleId(res.googleId);

      message.success('Login realizado com sucesso');
    }
  };

  const logout = (res) => {
    setIsLogged(false);
    setGoogleId('');
  };

  const handleLoginErr = (res) => {
    message.error('Falha ao fazer login');
  };

  const handleLogoutErr = (res) => {
    message.error('Falha ao sair');
  };

  return (
    <div>
      {isLogged ? (
        <GoogleLogout
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText='Sair'
          onLogoutSuccess={logout}
          onFailure={handleLogoutErr}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText='Login'
          onSuccess={login}
          onFailure={handleLoginErr}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
        />
      )}
    </div>
  );
}

export default GoogleAuth;
