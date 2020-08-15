/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Input, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  margin: auto;
`;

const Form = styled.form`
  display: flex;
`;

function DataEntry({ setIsbn }) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    setIsbn(value);
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
            onChange={(data) => setValue(data)}
            style={{ marginRight: 10 }}
          />
          <Tooltip title='Buscar'>
            <Button
              htmlType='submit'
              type='primary'
              shape='circle'
              icon={<SearchOutlined />}
            />
          </Tooltip>
        </Form>
      </Card>
    </ComponentWrapper>
  );
}

export default DataEntry;
