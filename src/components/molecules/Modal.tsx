import React, { useState, ReactNode } from "react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp, UserPlus } from "phosphor-react";
import ButtonComponent from "../atoms/Button";

interface ModalComponentProps {
  buttonName: string;
  header: string;
  body: any;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  icon?: ReactNode;
  buttonDisabled?: boolean;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  buttonName,
  header,
  body,
  onPrevClick,
  onNextClick,
  buttonDisabled = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <ButtonComponent disabled={buttonDisabled} onClick={toggleModal}>
        {buttonName}
      </ButtonComponent>
      <Modal
        icon={<UserPlus size={28} color="#1B4DFF" />}
        size="7x1"
        show={showModal}
        onClose={toggleModal}
      >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">{body}</div>
        </Modal.Body>
        <Modal.Footer>
          {onPrevClick && (
            <Button type="outlineGray" onClick={onPrevClick}>
              Volver
            </Button>
          )}
          {onNextClick && (
            <Button type="primary" onClick={onNextClick}>
              Siguiente
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
