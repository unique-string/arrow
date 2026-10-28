import React, { useState } from 'react'
import './styles/SetChar.css'
import pf from '../functions/picker_functions'

const TakeName = (props) => {

  const [ characterName, setCharacterName ] = useState(props.previousName) 

  const logName = (learn) => {
    if (characterName) {
        props.setInstructions(learn)
        props.setShowInfo(learn)
        props.setCurrentChoice('personality')
        props.setCharacterData({...props.characterData, name: characterName})
    } else {
      alert('You didn\'t enter a name! If you want to be nameless, you can put a space in the box.')
    }
}

return (
  <div className="centered-page">
    <div className="enter-name" id="enter-name">
      <div className="title">Death on the Arrow</div>
      <div className="intro-text">
        <p>You're a traveler on the Prairie Arrow, an express passenger train across a stretch of the American Midwest between Chicago and Denver.</p>
        <p>It's October 8, 1974, a Monday. At 4:41pm, just after the train reaches open country, someone is going to die.</p>
      </div>
      <div className="name-input">
        <span>What's your name?</span>
        <input type="text" id="charname" defaultValue={props.previousName} onChange={(e) => pf.nameInput(e, setCharacterName)}/>
      </div>
      <div className="continue-buttons">
        <button className="continue-button" onClick={() => logName(false)}>Continue</button>
        <button className="continue-button" onClick={() => logName(true)}>Continue with instructions</button>
      </div>
    </div>
  </div>
  )
}

export default TakeName