/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal, message, Button } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { RegisterForm } from '.';
import { sheetDocument } from '../assets/globalRefs';

const ModalWrapper = styled.div``;

const ModalContent = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: 55vh;
  padding: 10px 24px;
`;

const CustomizeModal = createGlobalStyle`
  .ant-modal-body {
    padding: 0 !important;
  }
`;

function RegisterModal({ data, isbn, setIsbn }) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setVisible(true);
    }
  }, [data]);

  const handleCancel = () => {
    setIsbn(null);
    setVisible(false);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const credentials = {
      private_key: process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.REACT_APP_SERVICE_EMAIL,
    };

    try {
      await sheetDocument.useServiceAccountAuth(credentials);

      await sheetDocument.loadInfo();

      const sheet = await sheetDocument.sheetsById[
        process.env.REACT_APP_SHEET_GID
      ];

      let authors = document.querySelector(`input[name="author1"]`).value;

      [2, 3, 4, 5, 6].forEach((item) => {
        const element = document.querySelector(`input[name="author${item}"]`)
          .value;
        if (element) {
          authors += `, ${element}`;
        }
      });

      const volumeInfo = {
        Título: document.querySelector('input[name="title"]').value,
        ISBN: document.querySelector('input[name="isbn"]').value,
        Autores: authors,
        Categoria: document.querySelector('.ant-select-selection-item').title,
        Editora: document.querySelector('input[name="publisher"]').value,
        Publicação: document.querySelector('input[name="date"]').value,
        Descrição: document.querySelector('textarea[name="description"]').value,
      };

      const quantity =
        document.querySelector('input[name="quantity"]').value || 1;

      for (let i = 1; i <= quantity; i += 1) {
        await sheet.addRow({ ...volumeInfo, Exemplar: `${i}` });
      }

      message.success('Livro cadastrado com sucesso!');
      setIsbn(null);
      setLoading(false);
      setVisible(false);
    } catch (e) {
      setLoading(false);
      message.error('Erro ao cadastrar livro');
      console.error('Error: ', e);
    }
  };

  const extractData = () => {
    if (data && data.data && data.data.items && data.data.items.length > 0) {
      return data.data.items[0].volumeInfo;
    }
    return undefined;
  };

  return (
    <ModalWrapper>
      <Modal
        title={(data && data.title) || 'Formulário de cadastro'}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button
            key='submit'
            htmlType='submit'
            type='primary'
            loading={loading}
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>,
        ]}
      >
        <ModalContent>
          <RegisterForm key={isbn} isbn={isbn} {...extractData(data)} />
        </ModalContent>
      </Modal>
      <CustomizeModal />
    </ModalWrapper>
  );
}

export default RegisterModal;
