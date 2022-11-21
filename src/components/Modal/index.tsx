import React, { useState } from "react";
import {  Modal } from "react-native";
import Button from "../Button";
import { Content, ContentModal, ModalElement } from "./styles";

interface IModalProps {
  children: React.ReactNode;
  title: string;
}

const ModalContent: React.FC<IModalProps> = ({ children, title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Content>
      <Modal animationType="fade" visible={visible}>
        <ContentModal>
          <ModalElement>
            {children}
          </ModalElement>
        </ContentModal>
      </Modal>
      <Button
        title={title}
        onPress={() => {
          setVisible(true);
          console.log('aaaaaaaa')
        }}
      />
    </Content>
  );
};

export default ModalContent;
