import React, { useState, useEffect } from 'react'
import './styles/SetChar.css'
import TakeName from './TakeName'
import Picker from './Picker'
import InfoPage from './InfoPage'


const SetChar = ({setCharacter}) => {

  const [ currentChoice, setCurrentChoice ] = useState('personality')
  const [ showInfo, setShowInfo ] = useState(false)
  const [ instructions, setInstructions ] = useState(false)
  const [ characterData, setCharacterData ] = useState({})

  const charName = characterData.name
  const motivation = characterData.motivation
  console.log(currentChoice)

  useEffect(() => {
    console.log(instructions)
    if (characterData.name) {
      if (instructions) setShowInfo(true)
      if (characterData.motivation) setCharacter(characterData)
      else if (characterData.profession) setCurrentChoice('motivation')
      else if (characterData.personality) setCurrentChoice('profession')
    }
  }, [characterData, instructions, setShowInfo, setCurrentChoice, setCharacter])

  return (
    <div className="game-container">
      {showInfo ? (
        <InfoPage 
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice}
        setShowInfo={setShowInfo}
        />
      ) : (
        <div className="take-data">
          {!characterData.name ? (
            <TakeName 
              currentChoice={currentChoice}
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
              setCurrentChoice={setCurrentChoice}
              setCharacterData={setCharacterData}
              setShowInfo={setShowInfo}                 
            />
          )}
        </div>
      )}
    </div>
  );
}

export default SetChar