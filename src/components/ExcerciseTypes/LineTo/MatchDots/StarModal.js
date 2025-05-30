import React from 'react'
import { Modal, ModalBody } from 'reactstrap';
import Animate from '../../../Animate/index.js';
import Fireworks from '../../../ResultsAndEffects/fireworks.js';


function StarModal({ isModal, star }) {
  return (
    <Modal centered isOpen={isModal} style={{ maxWidth: 640, }}>
      <ModalBody>
        {/* {renderContent} */}
        {(star >= 1) && (
          <Fireworks />
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
