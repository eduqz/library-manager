import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../assets/globalStyles';
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
      <GlobalStyles />
    </PageWrapper>
  );
}

export default App;
