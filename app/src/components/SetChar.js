import React, { useState } from 'react'
import './styles/SetChar.css'
import TakeName from './TakeName'
import Picker from './Picker'
import InfoPage from './InfoPage'

const steps = ['personality', 'profession', 'motivation']


const SetChar = ({setCharacter}) => {

  const [ currentChoice, setCurrentChoice ] = useState('personality')
  const [ showInfo, setShowInfo ] = useState(false)
  const [ instructions, setInstructions ] = useState(false)
  const [ characterData, setCharacterData ] = useState({})
  // kept so going back to the name screen can refill the name box
  const [ previousName, setPreviousName ] = useState('')
  // the choice undone by Back, so the picker can show it selected again
  const [ previousChoice, setPreviousChoice ] = useState(null)

  // called by Picker with the chosen option added; moves on to the next unchosen step
  const advance = (newCharacterData) => {
    const next = steps.find(step => !newCharacterData[step])
    if (!next) {
      setCharacter(newCharacterData)
      return
    }
    setCharacterData(newCharacterData)
    setCurrentChoice(next)
    setPreviousChoice(null)
    if (instructions) setShowInfo(true)
  }

  // undoes the previous step's choice (and its money); from the first step, returns to the name screen
  const goBack = () => {
    const index = steps.indexOf(currentChoice)
    if (index === 0) {
      setPreviousName(characterData.name)
      setCharacterData({})
      return
    }
    const previous = steps[index - 1]
    const newCharacterData = {...characterData}
    if (newCharacterData[previous].money) newCharacterData.money -= newCharacterData[previous].money
    delete newCharacterData[previous]
    setPreviousChoice(characterData[previous])
    setCharacterData(newCharacterData)
    setCurrentChoice(previous)
  }

  return (
    <div className="game-container">
      <div className="take-data">
        {showInfo ? (
          <InfoPage
            currentChoice={currentChoice}
            setCurrentChoice={setCurrentChoice}
            setShowInfo={setShowInfo}
          />
        ) : !characterData.name ? (
          <TakeName
            previousName={previousName}
            characterData={characterData}
            setCurrentChoice={setCurrentChoice}
            setCharacterData={setCharacterData}
            setInstructions={setInstructions}
            setShowInfo={setShowInfo}
          />
        ) : (
          <Picker
            currentChoice={currentChoice}
            characterData={characterData}
            previousChoice={previousChoice}
            setCharacterData={advance}
            goBack={goBack}
          />
        )}
      </div>
    </div>
  );
}

export default SetChar
