import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../assets/globalStyles';
import Home from './Home';
import 'antd/dist/antd.css';

const PageWrapper = styled.div`
  background-color: #eee;
  height: 100%;
  width: 100%;
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
