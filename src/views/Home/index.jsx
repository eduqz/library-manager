import React from 'react';
import styled from 'styled-components';
import DataEntry from '../../components/DataEntry';
import RegisterModal from '../../components/RegisterModal';

const PageWrapper = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: inline-flex;
`;

function Home() {
  return (
    <PageWrapper>
      <DataEntry />
      <RegisterModal />
    </PageWrapper>
  );
}

export default Home;
