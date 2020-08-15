/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

const ModalWrapper = styled.div``;

const sheetLink =
  'https://docs.google.com/spreadsheets/d/1bNDE9tONoNAP7vLzaCz_r_-IP0CUxpqtEEeWA9r9f-0/edit?usp=sharing';

function RegisterModal({ data, clearData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setVisible(true);
    }
  }, [data]);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
    clearData();
  };

  return (
    <ModalWrapper>
      <Modal
        title={data && data.title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Cadastrar'
        cancelText='Cancelar'
      >
        Teste
      </Modal>
    </ModalWrapper>
  );
}

export default RegisterModal;
