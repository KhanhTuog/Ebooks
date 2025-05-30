import React from 'react';
import { Modal, ModalBody } from 'reactstrap'
import styles from './styles.module.css'
const FormModal = (props) => {
  return (
    <Modal
      contentClassName={styles.modalContent}
      className={styles.modal}
      isOpen={props.visible}
      toggle={props.toggle}
    >
      <ModalBody className={`${styles.modalBackground} ${styles.p0Login}`}>
        {props.content}
      </ModalBody>
      <img
        onClick={props.imgOnClick}
        src={props.imgUrl} alt="" style={props.imgStyle} />
    </Modal>
  );
}

export default FormModal;
