import React, { useState, useRef } from 'react'
import YouAreHere from './YouAreHere'
import PinModal from './PinModal'
import Pin from './Pin'
import './styles/Map.css'
import map from '../img/map.jpg'

const Map = ({characterName, setShowMap}) => {

  // pin and pin modal positions are percentages of the map, so they stay put on scroll/resize
  const [ pins, setPins ] = useState([])
  const [ pinModal, setPinModal ] = useState(null)
  const [ editingPin, setEditingPin ] = useState(null)
  const nextPinId = useRef(0)

  const pinModalCheck = (e) => {
    // runs on mousedown, before an open pin label blurs, so clicking away
    // from a label only closes it instead of also offering a new pin
    if (e.button !== 0 || editingPin !== null) return
    const rect = e.currentTarget.getBoundingClientRect()
    setPinModal({
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    })
  }

  const setPin = ({x, y}) => {
    const newPin = {id: nextPinId.current++, x, y, text: '---'}
    setPins(pins => [...pins, newPin])
    setPinModal(null)
    setEditingPin(newPin.id)
  }

  const takePinInput = (id, text) => {
    setPins(pins => pins.map(pin => pin.id === id ? {...pin, text} : pin))
    setEditingPin(null)
  }

  const deletePin = (id) => {
    setPins(pins => pins.filter(pin => pin.id !== id))
    setEditingPin(editing => editing === id ? null : editing)
  }

  const clearPins = () => {
    setPins([])
    setEditingPin(null)
  }

return (
  <div className="modal-container">
    <div className="modal-overlay" onClick={() => setShowMap(false)}></div>
    <div className="map-window vert-centered">
      {/* on narrow screens the map is wider than the viewport and pans sideways; clear pins stays put */}
      <div className="map-viewport">
        <button className="clear-pins" onClick={() => clearPins()}>clear pins</button>
        <div className="map-scroll">
          <div className="map-container">
            <YouAreHere
              characterName={characterName}
            />
            <div className="pin-field" onMouseDown={(e) => pinModalCheck(e)}></div>
            {pins.map(pin => (
              <div className="pin-container" key={`pin-${pin.id}`} style={{left: `${pin.x}%`, top: `${pin.y}%`}}>
                <Pin
                  pin={pin}
                  editing={editingPin === pin.id}
                  setEditingPin={setEditingPin}
                  takePinInput={takePinInput}
                  deletePin={deletePin}
                />
              </div>
            ))}
            {pinModal ? (
              <PinModal
                pinModal={pinModal}
                setPin={setPin}
                setPinModal={setPinModal}
              />
              ) : ''
            }
            <img className="map" id="map" alt="map" src={map} />
          </div>
        </div>
      </div>
      <button className="map-close" onClick={() => setShowMap(false)}>X</button>
    </div>
  </div>
  )
}

export default Map
