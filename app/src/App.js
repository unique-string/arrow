import React, { useState } from 'react'
import SetChar from './components/SetChar'
import CharSheet from './components/CharSheet'
import './App.css';

function App() {

  const [ character, setCharacter] = useState(null)

  return (
    <div className="App">
      {!character ? (
        <SetChar
          setCharacter={setCharacter}
        />
      ) : (
        <CharSheet
          character={character}
        />
      )}
    </div>
  );
}

export default App;
