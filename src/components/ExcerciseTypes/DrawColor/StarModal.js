import React from 'react'
import { Modal, ModalBody } from 'reactstrap';
import Firework from '../../ResultsAndEffects/fireworks.js';
import Animate from '../../Animate';

function StarModal({ isModal, star }) {
  return (
    <Modal centered isOpen={isModal} style={{ maxWidth: 640, }}>
      <ModalBody>
        {/* {renderContent} */}
        {(star >= 1) && (
          <Firework />
        )}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 240 }}>
          <Animate
            resultString={star}
          />
        </div>
      </ModalBody>
    </Modal>
  )
}

export default StarModal;
