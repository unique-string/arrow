import React from 'react'
import check from '../img/check.png'
import minus from '../img/minus.png'

const PinModal = ({pinModal, setPin, setPinModal}) => {

  return (
    <div className="pin-modal" style={{left: `${pinModal.x}%`, top: `${pinModal.y}%`}}>
      <div className="pin-modal-header">Place a pin?</div>
      <button className="icon-button" onClick={() => setPin(pinModal)}>
        <img className="button-icon" alt="yes" src={check} />
      </button>
      <button className="icon-button" onClick={() => setPinModal(null)}>
        <img className="button-icon" alt="no" src={minus} />
      </button>
    </div>
  )
}

export default PinModal
