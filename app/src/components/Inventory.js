import React, { useState } from 'react'
import './styles/Inventory.css'
import plus from '../img/plus.png'
import minus from '../img/minus.png'

// items live in CharSheet so edits survive closing the modal
const Inventory = ({items, setItems, setShowInventory}) => {

  const [ itemInput, setItemInput ] = useState(false)
  const [ inputClick, setInputClick ] = useState(false)
  const [ newItemName, setNewItemName ] = useState('')

  const addItem = () => {
    if (!newItemName) {
      setInputClick(true)
      return
    }
    setItems([...items, newItemName])
    setNewItemName('')
    setInputClick(false)
  }

  const removeItem = (itemIndex) => {
    setItems(items.filter((item, index) => index !== itemIndex))
  }

return (
  <div className="modal-container">
    <div className="modal-overlay" onClick={() => setShowInventory(false)} />
    <div className="items vert-centered">
      <div className="inventory-heading">Inventory</div>
      {items.map((item, index) => {
        return (
          <div className="item" key={`item-${index}`}>
            <div className="item-name">{item}</div>
            <div className="add-remove">
              <button className="add-remove-button" data-item={item} onClick={() => removeItem(index)}>
                <img className="button-icon" alt="remove item" src={minus} />
              </button>
            </div>
          </div>
        )
      })}
      <div className="add-item" onMouseEnter={() => setItemInput(true)} onMouseLeave={() => setItemInput(false)}>
        {(itemInput || inputClick) ? (
          <div className="item new-item">
            <input type="text" className="item-input" id="item-input" value={newItemName} onClick={() => setInputClick(true)} onChange={(e) => setNewItemName(e.target.value)}/>
          </div>
        ) : ('')}
        <button className="add-remove-button" onClick={() => addItem()}>
          <img className="button-icon" alt="add item" src={plus} />
        </button>
      </div>
      <div className="close-button">
        <button className="inventory-close" onClick={() => setShowInventory(false)}>X</button>
      </div>
    </div>
  </div>
  )
}

export default Inventory