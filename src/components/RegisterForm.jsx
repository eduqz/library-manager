/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Input, InputNumber, Select, Button } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { TextArea } = Input;

const RegisterWrapper = styled.div``;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin: 10px 0;
`;

const GridGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 15px;
`;

const Label = styled.label`
  margin: 6px 0;
  grid-row: span 10;
`;

const MultiInputWrapper = styled.div``;

const InputWrapper = styled.div`
  height: ${(props) => (props.visible ? 'auto' : '0')};
  transform: ${(props) => (props.visible ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: height 0.2s ease-in-out;
  transition: all 0.15s ease-in-out;
  margin-top: ${(props) => (props.visible ? '5px' : '0')};
`;

function RegisterModal({
  title,
  authors,
  publisher,
  publishedDate,
  description,
}) {
  const [numAuthors, setNumAuthors] = useState(1);

  const getYear = (value) => {
    if (value && value.length >= 4) {
      const year = value.substring(value.length - 4);
      return parseInt(year, 10);
    }
    return undefined;
  };

  useEffect(() => {
    setNumAuthors((authors && authors.length) || 1);
  }, [authors]);

  return (
    <RegisterWrapper>
      <FormGroup>
        <Label htmlFor='title'>Título</Label>
        <Input name='title' defaultValue={title} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='author1'>Autores</Label>
        <MultiInputWrapper>
          <Input name='author1' defaultValue={authors && authors[0]} required />
          {[2, 3, 4, 5, 6].map((item) => (
            <InputWrapper key={item} visible={numAuthors >= item}>
              <Input
                name={`author${item}`}
                defaultValue={authors && authors[item - 1]}
                tabindex={numAuthors >= item ? undefined : -1}
              />
            </InputWrapper>
          ))}
        </MultiInputWrapper>
        <Button
          type='dashed'
          onClick={() => setNumAuthors(numAuthors + 1)}
          disabled={numAuthors === 6}
          style={{ marginTop: 5 }}
        >
          Adicionar outro autor
        </Button>
      </FormGroup>
      <GridGroup>
        <FormGroup>
          <Label htmlFor='publisher'>Editora</Label>
          <Input name='publisher' defaultValue={publisher} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='date'>Publicação</Label>
          <InputNumber
            name='date'
            min={1800}
            defaultValue={getYear(publishedDate)}
          />
        </FormGroup>
      </GridGroup>
      <GridGroup>
        <FormGroup>
          <Label htmlFor='category'>Categoria</Label>
          <Select
            showSearch
            name='category'
            placeholder='Selecione'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {[
              'Biblico',
              'Conto/Crônica',
              'Ensino/Educação',
              'Ecologia/Natureza',
              'Poesia',
              'Inclusão',
              'Fantasia',
              'Avemtira/Suspense',
              'Comportamento',
              'Biografia',
              'Como fazer',
            ].map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='quantity'>Quantidade</Label>
          <InputNumber name='quantity' min={1} defaultValue={1} />
        </FormGroup>
      </GridGroup>
      <FormGroup>
        <Label htmlFor='description'>Descrição</Label>
        <TextArea rows={2} name='description' defaultValue={description} />
      </FormGroup>
    </RegisterWrapper>
  );
}

export default RegisterModal;
