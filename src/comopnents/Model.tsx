// MyModal.tsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

interface MyModalProps {
  show: boolean;
  handleClose: () => void;
  messageText: string;
  titleText: string;
}

const MyModal: React.FC<MyModalProps> = ({
  show,
  handleClose,
  messageText,
  titleText,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{messageText}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
