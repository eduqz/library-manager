import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DataEntry, RegisterModal } from '../components/DataEntry';
import { createApiLink } from '../assets/gobalRefs';

const PageWrapper = styled.div`
  background-color: #eee;
  height: 100%;
  width: 100%;
  display: inline-flex;
`;

const headers = {
  'Content-Type': 'application/json',
};

function Home() {
  const [isbn, setIsbn] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isbn) {
      setLoading(true);

      axios(createApiLink(isbn), { headers })
        .then((response) => {
          console.log(response);
          setLoading(false);
          setData(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log('Error: ', error);
        });
    }
  }, [isbn]);
  return (
    <PageWrapper>
      <DataEntry setIsbn={setIsbn} loading={loading} />
      <RegisterModal data={data} />
    </PageWrapper>
  );
}

export default Home;
