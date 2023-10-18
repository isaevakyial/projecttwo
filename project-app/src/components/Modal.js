import React from "react";
import styled from "styled-components";

function Modal({ userId, onClose }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <p>ID пользователя: {userId}</p>
        <button onClick={onClose}>Закрыть</button>
      </ModalContent>
    </ModalWrapper>
  );
}
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
`;

export default Modal;
