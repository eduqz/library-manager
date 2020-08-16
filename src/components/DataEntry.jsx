/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Input, Button, Tooltip } from 'antd';
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  margin: auto;
`;

const Form = styled.form`
  display: flex;
`;

function DataEntry({ setIsbn, loading }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsbn(value);
    setValue('');
  };

  return (
    <ComponentWrapper>
      <Card
        title='Cadastro de livro'
        extra={<a href='#'>Lista de livros</a>}
        headStyle={{ fontWeight: 'bold' }}
        style={{ width: 350 }}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder='ISBN'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ marginRight: 10 }}
            disabled={loading}
          />
          <Tooltip title='Buscar'>
            <Button
              htmlType='submit'
              type='primary'
              shape='circle'
              icon={<SearchOutlined />}
              disabled={loading}
            />
          </Tooltip>
        </Form>
        {loading && (
          <LoadingOutlined
            style={{
              fontSize: 24,
              position: 'absolute',
              top: 0,
              padding: '85px 138px',
            }}
            spin
          />
        )}
      </Card>
    </ComponentWrapper>
  );
}

export default DataEntry;
