import React, { useState, useContext } from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { GoogleOutlined } from '@ant-design/icons';
import { message, Button } from 'antd';
import styled from 'styled-components';
import GoogleId from '../state/GoogleId.context';

const ButtonWrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

function GoogleAuth() {
  const [isLogged, setIsLogged] = useState(false);

  const [googleId, setGoogleId] = useContext(GoogleId);

  const login = (res) => {
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

  const { signIn } = useGoogleLogin({
    clientId: process.env.REACT_APP_CLIENT_ID,
    onSuccess: login,
    onFailure: handleLoginErr,
    cookiePolicy: 'single_host_origin',
    responseType: 'code,token',
  });

  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_CLIENT_ID,
    onSuccess: logout,
    onFailure: handleLogoutErr,
    cookiePolicy: 'single_host_origin',
    responseType: 'code,token',
  });

  return (
    <ButtonWrapper>
      {isLogged ? (
        <Button
          type='primary'
          onClick={signOut}
          icon={<GoogleOutlined />}
          shape='round'
        >
          Sair
        </Button>
      ) : (
        <Button
          type='primary'
          onClick={signIn}
          icon={<GoogleOutlined />}
          shape='round'
        >
          Login
        </Button>
      )}
    </ButtonWrapper>
  );
}

export default GoogleAuth;
