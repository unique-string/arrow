import React, { useState } from 'react'
import './styles/Map.css'
import trashIcon from '../img/trash-icon.png'


const Pin = ({pin, editing, setEditingPin, takePinInput, deletePin}) => {

  const [ pinText, setPinText ] = useState(pin.text)

  const readyInput = () => {
    if (editing) return
    setPinText(pin.text)
    setEditingPin(pin.id)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') takePinInput(pin.id, pinText)
  }

  return (
    <>
      <div className="pin-text" onClick={() => readyInput()}>
        {editing ? (
          <input
            className="pin-text-input"
            autoFocus
            onFocus={(e) => e.target.select()}
            size={Math.max(pinText.length, 1)}
            value={pinText}
            onChange={(e) => setPinText(e.target.value)}
            onBlur={() => takePinInput(pin.id, pinText)}
            onKeyUp={(e) => handleKeyUp(e)}
          />
        ) : pin.text}
      </div>
      <div className="stem-delete">
        <div className="pin-stem"></div>
        <div className="pin-delete">
          <button className="pin-delete-button" onClick={() => deletePin(pin.id)}>
            <img className="pin-delete-image" alt="delete pin" src={trashIcon} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Pin
