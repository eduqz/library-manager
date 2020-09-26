import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DataEntry, RegisterModal, GoogleAuth } from '../components';
import { createApiLink } from '../assets/globalRefs';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
`;

const headers = {
  'Content-Type': 'application/json',
};

function Home() {
  const [isbn, setIsbn] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [googleId, setGoogleId] = useState('');

  useEffect(() => {
    if (isbn) {
      if (isbn === '0') {
        setData({ add: true });
      } else {
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
    }
  }, [isbn]);

  return (
    <PageWrapper>
      <DataEntry setIsbn={setIsbn} loading={loading} />
      <RegisterModal
        data={data}
        isbn={isbn}
        setIsbn={setIsbn}
        googleId={googleId}
      />
      <GoogleAuth setGoogleId={setGoogleId} />
    </PageWrapper>
  );
}

export default Home;
