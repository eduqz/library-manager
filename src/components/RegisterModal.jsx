/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

const ModalWrapper = styled.div``;

function RegisterModal({ data }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setVisible(true);
    }
  }, [data]);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
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
        {JSON.stringify(data)}
      </Modal>
    </ModalWrapper>
  );
}

export default RegisterModal;
