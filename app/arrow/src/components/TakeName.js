import React, { useState } from 'react'
import './styles/SetChar.css'
import pf from '../functions/picker_functions'

const TakeName = (props) => {

  const [ characterName, setCharacterName ] = useState('') 

  const logName = (learn) => {
    if (learn) props.setInstructions(true)
    if (characterName) {
        props.setCurrentChoice('personality')
        if (props.instructions) props.setShowInfo(true)
        props.setCharacterData({...props.characterData, name: characterName})
    } else {
      alert('You didn\'t enter a name! If you want to be nameless, you can put a space in the box.')
    }
}

return (
  <div className="enter-name" id="enter-name">
    <div className="title">Death on the Arrow</div>
    <div className="intro-text">
      <p>You're a traveler on the Prairie Arrow, an express passenger train across a stretch of the American Midwest between Chicago and Denver.</p>
      <p>It's October 8, 1974, a Monday. At 4:41pm, just after the train reaches open country, someone is going to die.</p>
    </div>
    <div className="name-input">
      <span>What's your name?</span>
      <input type="text" id="charname" onChange={(e) => pf.nameInput(e, setCharacterName)}/>
    </div>
    <div className="continue-buttons">
      <button className="continue-button" onClick={() => logName(false)}>Continue</button>
      <button className="continue-button" onClick={() => logName(true)}>Continue with instructions</button>
    </div>
  </div>
  )
}

export default TakeName