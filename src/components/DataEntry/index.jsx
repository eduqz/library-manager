import React from 'react';
import { Card, Input, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  margin: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

function DataEntry() {
  return (
    <ComponentWrapper>
      <Card
        title='Cadastro de livro'
        extra={<a href='#'>Lista de livros</a>}
        headStyle={{ fontWeight: 'bold' }}
        style={{ width: 350 }}
      >
        <ContentWrapper>
          <Input placeholder='ISBN' style={{ marginRight: 10 }} />
          <Tooltip title='Buscar'>
            <Button type='primary' shape='circle' icon={<SearchOutlined />} />
          </Tooltip>
        </ContentWrapper>
      </Card>
    </ComponentWrapper>
  );
}

export default DataEntry;
