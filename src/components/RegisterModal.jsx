/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { RegisterForm } from '.';

const ModalWrapper = styled.div``;

const ModalContent = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: 55vh;
  padding: 24px;
`;

const CustomizeModal = createGlobalStyle`
  .ant-modal-body {
    padding: 0 !important;
  }
`;

function RegisterModal({ data, setIsbn }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setVisible(true);
    }
  }, [data]);

  const handleOk = () => {
    setIsbn(null);
    setVisible(false);
  };

  const handleCancel = () => {
    setIsbn(null);
    setVisible(false);
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
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Cadastrar'
        cancelText='Cancelar'
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
