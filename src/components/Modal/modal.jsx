import React from "react";
import Modal from "react-modal";
import { ButtonModal, Image } from "./styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderColor: "#233653",
    borderSizer: "20%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export function ModalSkill() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#2d939c";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <ButtonModal onClick={openModal}>
        <h2>Clique aqui para adicionar uma skill</h2>
      </ButtonModal>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Escolha sua skill</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
