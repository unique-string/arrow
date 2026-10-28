import React, { useState } from 'react'
import Inventory from './Inventory'
import Map from './Map'
import PrintSheet from './PrintSheet'
import sf from '../functions/sheet_functions'
import './styles/CharSheet.css'
import './styles/Map.css'
import plus from '../img/plus.png'
import minus from '../img/minus.png'
import inventoryIcon from '../img/inventory.png'
import mapIcon from '../img/map-icon.png'


const CharSheet = ({character}) => {

  const {name, personality, profession, motivation} = character
  const [ roll, setRoll ] = useState({value: '', verb: '', hash: Math.random(), detail: ''})
  const [ characterDetails, setCharacterDetails ] = useState(character)
  const [ items, setItems ] = useState(() => personality.items.concat(profession.items))
  const [ showInventory, setShowInventory ] = useState(false)
  const [ showMap, setShowMap ] = useState(false)

  const loggins = () => {
    console.log(showMap)
  }

  return (
    <div className="game-container">
      {showInventory ? (
        <Inventory 
          items={items}
          setItems={setItems}
          setShowInventory={setShowInventory}
        />
      ) : ''}
      {/* kept mounted while hidden so pins and the marker position persist */}
      <div style={{display: showMap ? '' : 'none'}}>
        <Map
          characterName={name}
          setShowMap={setShowMap}
        />
      </div>
      <PrintSheet
        character={character}
        items={items}
        money={characterDetails.money}
      />

      <div className="character-sheet">
        <div className="roller">
          <div className="sheet-verbs">
            {Object.keys(personality.verbs).map((verb, index) => {
              const verbValue = personality.verbs[verb]
              let highlightColor = '#111'
              if (verbValue > 1) highlightColor = 'green'
              if (verbValue < 0) highlightColor = 'red'
              return (
                <div 
                  key={verb} className="sheet-verb" data-name={verb} data-value={verbValue} onClick={(e) => sf.rollModified(e, setRoll)}>
                  <div className="verb-title">{sf.capitalizeWord(verb)}</div>
                  <div className="verb-value" style={{color: highlightColor}}>{verbValue < 0 ? verbValue : `+${verbValue}`}</div>
                </div>
              )
            })}
          </div>
          <div className="blank-box-left" id="blank-box-left">
            <div className="money-box" id="money-box">
              <div className="money">
                <div className="current-money">${(characterDetails.money / 100).toFixed(2)}</div>
                <div className="money-changer">
                  <input type="number" id="money-input" />
                  <div className="plus-minus">
                    <button className="icon-button" value="+" onClick={(e) => setCharacterDetails(sf.changeMoney(e, characterDetails))}>
                      <img className="button-icon" alt="plus" src={plus} />
                    </button>
                    <button className="icon-button" value="-" onClick={(e) => setCharacterDetails(sf.changeMoney(e, characterDetails))}>
                      <img className="button-icon" alt="minus" src={minus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="between-buttons">
              <button className="between-button" onClick={() => setShowInventory(true)}>
                <img className="between-button-icon" alt="inventory" src={inventoryIcon}></img>
              </button>
              <button className="between-button" onClick={() => setShowMap(true)}>
                <img className="between-button-icon" alt="map" src={mapIcon}></img>
              </button>
              <button className="between-button" title="Print or save as PDF" onClick={() => window.print()}>
                <svg className="between-button-icon" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinejoin="round" role="img" aria-label="print">
                  <path d="M6 9V3h12v6" />
                  <rect x="3" y="9" width="18" height="8" rx="1" />
                  <path d="M6 14h12v7H6z" fill="#fff" />
                </svg>
              </button>
            </div>
            <div className="whole-roll">
              <div className="roll-box" id="roll-box">
                <div className="modifier-name" id="modifier-name">{roll.verb ? sf.capitalizeWord(roll.verb) : ''}</div>
                <div key={roll.hash} className={`roll-value ${sf.rollValueColor(roll.value)}`}>{roll.value}</div>
                <div className="roll-detail">{roll.detail}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-text" onClick={() => loggins()}>
          {profession.text}
          {motivation.text}
        </div>
      </div>
    </div>
  )
}

export default CharSheet
