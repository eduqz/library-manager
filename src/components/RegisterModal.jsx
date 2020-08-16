/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal, message, Button } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { RegisterForm } from '.';
import { sheetApiLink } from '../assets/gobalRefs';

const ModalWrapper = styled.div``;

const ModalContent = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: 55vh;
  padding: 24px;Form
`;

const CustomizeModal = createGlobalStyle`
  .ant-modal-body {
    padding: 0 !important;
  }
`;

function RegisterModal({ data, setIsbn }) {
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

  const handleSubmit = () => {
    setLoading(true);

    axios
      .post(sheetApiLink, {
        range: 'Sheet1!A1:F1',
        majorDimension: 'ROWS',
        values: [
          ['Door', '$15', '2', '3/15/2016'],
          ['Engine', '$100', '1', '3/20/2016'],
        ],
      })
      .then(() => {
        message.success('Livro cadastrado com sucesso!');
        setIsbn(null);
        setLoading(false);
        setVisible(false);
      })
      .catch(() => {
        setLoading(false);
        message.error('Erro ao cadastrar livro');
      });
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
        title={(data && data.title) || 'Cadastro de livro'}
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
          <RegisterForm {...extractData(data)} />
        </ModalContent>
      </Modal>
      <CustomizeModal />
    </ModalWrapper>
  );
}

export default RegisterModal;
