import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/global';
import Home from '../Home';
import 'antd/dist/antd.css';

const PageWrapper = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: inline-flex;
`;

function App() {
  return (
    <PageWrapper>
      <Home />
      <GlobalStyle />
    </PageWrapper>
  );
}

export default App;
