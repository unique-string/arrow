import React, { useEffect, useState } from 'react'
import './styles/Picker.css'
import pf from '../functions/picker_functions'


const Picker = (props) => {

  // the details box previews the hovered option, falling back to the selected one
  const [ selected, setSelected ] = useState(props.previousChoice)
  const [ hovered, setHovered ] = useState(null)
  const [ displayShuffle, setDisplayShuffle ] = useState(pf.displayOptions(props.currentChoice))
  const heading = props.currentChoice !== 'done' ? pf.setHeading(props.currentChoice) : ''
  const shown = hovered || selected


  useEffect(() => {
    setDisplayShuffle(pf.displayOptions(props.currentChoice))
    setSelected(props.previousChoice)
    setHovered(null)
  }, [props.currentChoice, props.previousChoice, setDisplayShuffle])

  const confirm = (option) => {
    if (option.items) {
      for (let item of option.items) {
        if (item.includes('dollars')) option.items.splice(option.items.indexOf(item), 1)
      }
    }
    const newCharacterData = {...props.characterData, [props.currentChoice]: option}
    if (option.money) newCharacterData.money = (newCharacterData.money || 0) + option.money
    props.setCharacterData(newCharacterData)
  }

  return (
    <div className="picker-page">
      <div className="picker">
        <div className="picker-heading">{heading}</div>
        <div className="picker-body">
          <div className="options">
          {displayShuffle.map((option, index) => {
            return (
              <button
              className={`option ${option === selected ? 'selected' : ''}`}
              key={`option-${index}`}
              aria-pressed={option === selected}
              onClick={() => setSelected(option)}
              onMouseEnter={() => setHovered(option)}
              onMouseLeave={() => setHovered(null)}
              >
                {option.name}
              </button>
            )
          })}
          </div>
          {/* every option's details sit stacked in one spot with only the shown one visible,
              so the box is as tall as the longest and the picker doesn't resize while browsing */}
          <div className="option-details thin-scroll">
            <div className="details-stack">
              <div className={`details-card ${!shown ? 'visible' : ''}`}>
                <div className="details-prompt">Choose an option to see its details.</div>
              </div>
              {displayShuffle.map((option, index) => (
                <div className={`details-card ${option === shown ? 'visible' : ''}`} key={`details-${index}`}>
                  <div className="option-title">{option.name}</div>
                  <div className="option-text">{option.text}</div>
                  {option.items ? (
                    <div className="items-list">Inventory items: {option.items.join(', ')}</div>
                  ) : ''}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="picker-footer">
          <button className="continue-button picker-back" onClick={() => props.goBack()}>Back</button>
          <button className="continue-button picker-continue" disabled={!selected} onClick={() => confirm(selected)}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Picker
