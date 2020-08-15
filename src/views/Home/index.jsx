import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DataEntry, RegisterModal } from '../../components';
import { createApiLink } from '../../assets/gobalRefs';

const PageWrapper = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: inline-flex;
`;

const headers = {
  'Content-Type': 'application/json',
};

function Home() {
  const [isbn, setIsbn] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    axios(createApiLink(isbn), { headers })
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, [isbn]);
  return (
    <PageWrapper>
      <DataEntry setIsbn={setIsbn} />
      <RegisterModal data={data} />
    </PageWrapper>
  );
}

export default Home;
