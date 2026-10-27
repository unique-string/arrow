import React, { useEffect, useState } from 'react'
import './styles/Picker.css'
import pf from '../functions/picker_functions'
import check from '../img/check.png'


const Picker = (props) => {

  const [ currentOption, setCurrentOption ] = useState(null)
  const [ clicked, setClicked ] = useState(false)
  const [ displayShuffle, setDisplayShuffle ] = useState(pf.displayOptions(props.currentChoice))
  const heading = props.currentChoice !== 'done' ? pf.setHeading(props.currentChoice) : ''


  useEffect(() => {
    setDisplayShuffle(pf.displayOptions(props.currentChoice))
  }, [props.currentChoice, setDisplayShuffle])

  const optionClick = (option) => {
    setCurrentOption(option)
    setClicked(true)
  }

  const confirm = (option) => {
    const newCharacterData = {...props.characterData}
    newCharacterData[props.currentChoice] = option
    props.setCharacterData(newCharacterData)
    const currentItems = newCharacterData[props.currentChoice].items
    const money = newCharacterData[props.currentChoice].money
    if (currentItems) {
      for (let item of currentItems) {
        if (item.includes('dollars')) currentItems.splice(currentItems.indexOf(item), 1)
      }
    }
    if (money) {
      newCharacterData.money ? newCharacterData.money += money : newCharacterData.money = money
    }
  }

  console.log(currentOption)

  return (
    <div className="picker">
      <div className="picker-heading">{heading}</div>
      <div className="options thin-scroll">
      {displayShuffle.map((option, index) => {
        return (
          <div
          className="option"
          key={`option-${index}`}
          onClick={() => optionClick(option)}
          onMouseEnter={() => setCurrentOption(option)}
          onMouseLeave={!clicked ? () => setCurrentOption(null) : () => {}}
          >
            {option === currentOption ? (
              <div className="confirm-modal">
                <button className="confirm-button" onClick={() => confirm(option)}>
                  <img alt="confirm" src={check} />
                </button>
              </div>) : ''}
            <div className="option-title">{option.name}</div>
            <div className="option-body">
              <div className="option-text">{option.text}</div>
              {option.items ? (
              <div className="option-items">
                <div className="items-list">Inventory items: {option.items.map(item => {return item}).join(', ')}</div>
              </div>
              ) : ''}
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Picker