/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Input, Button, Tooltip } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { sheetLink } from '../assets/globalRefs';

const ComponentWrapper = styled.div`
  margin: auto;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 5px;
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
        title='Cadastro de livros'
        extra={
          <a href={sheetLink} target='_blank' rel='noreferrer'>
            Lista de livros
          </a>
        }
        headStyle={{ fontWeight: 'bold' }}
        style={{ width: 350 }}
      >
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder='ISBN'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={loading}
          />
          <Tooltip title='Buscar'>
            <Button
              htmlType='submit'
              type='primary'
              icon={<SearchOutlined />}
              loading={loading}
            />
          </Tooltip>

          <Tooltip title='Cadastrar'>
            <Button
              type='default'
              shape='circle'
              icon={<PlusOutlined />}
              style={{ marginLeft: 10 }}
              onClick={() => setIsbn('0')}
            />
          </Tooltip>
        </Form>
      </Card>
    </ComponentWrapper>
  );
}

export default DataEntry;
