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
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  buttonName,
  header,
  body,
  onPrevClick,
  onNextClick,
  icon,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <ButtonComponent name={buttonName} onClick={toggleModal} type="primary" />

      <Modal
        icon={<UserPlus size={28} color="#1B4DFF" />}
        size="7x1"
        show={showModal}
        onClose={toggleModal}
      >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              {body}
            </p>
          </div>
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
