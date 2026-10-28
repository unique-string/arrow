import React, { useState } from 'react'
import './styles/InfoPage.css'
import info from '../data/info'
import sf from '../functions/sheet_functions'


const InfoPage = (props) => {
  console.log(props.currentChoice)
  const currentInfo = info[props.currentChoice]
  return (
    <div className="centered-page">
      <div className="info-page">
        <div className="info-heading">{sf.capitalizeWord(props.currentChoice)}</div>
        {Object.entries(currentInfo).map((entry, index) => {
          if (entry[1]) {
            return (
              <div className="info-section" key={`info-section-${index}`}>{entry[1]}</div>
            )}
          })}
        <button className="continue-button" onClick={() => props.setShowInfo(false)}>Continue</button>
      </div>
    </div>
  );
}

export default InfoPage