/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
  grid-template-columns: auto auto;
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
          <InputWrapper visible={(authors && authors[1]) || numAuthors >= 2}>
            <Input name='author2' defaultValue={authors && authors[1]} />
          </InputWrapper>
          <InputWrapper visible={(authors && authors[2]) || numAuthors >= 3}>
            <Input name='author3' defaultValue={authors && authors[2]} />
          </InputWrapper>
          <InputWrapper visible={(authors && authors[3]) || numAuthors >= 4}>
            <Input name='author4' defaultValue={authors && authors[3]} />
          </InputWrapper>
          <InputWrapper visible={(authors && authors[4]) || numAuthors >= 5}>
            <Input name='author5' defaultValue={authors && authors[4]} />
          </InputWrapper>
          <InputWrapper visible={(authors && authors[5]) || numAuthors >= 6}>
            <Input name='author6' defaultValue={authors && authors[5]} />
          </InputWrapper>
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
          <InputNumber name='date' defaultValue={getYear(publishedDate)} />
        </FormGroup>
      </GridGroup>
      <FormGroup>
        <Label htmlFor='date'>Categoria</Label>
        <Select
          showSearch
          placeholder='Selecione uma categoria'
          optionFilterProp='children'
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value='Infatil'>Infatil</Option>
          <Option value='Infantil-juvenil'>Infantil-juvenil</Option>
          <Option value='Fábula'>Fábula</Option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='description'>Descrição</Label>
        <TextArea rows={3} name='description' defaultValue={description} />
      </FormGroup>
    </RegisterWrapper>
  );
}

export default RegisterModal;
