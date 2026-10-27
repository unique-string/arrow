import React, { useRef } from 'react';
import Draggable from './Draggable'
import youAreHere from '../img/you-are-here.png'

// position lives in the element's transform (set by Draggable); Map stays mounted, so it persists
const YouAreHere = ({characterName}) => {

  const ref = useRef(null);
  Draggable(ref);

  return (
    <div className="you-are-here" ref={ref}>
      <div className="character-pin-name">{characterName}</div>
      <img className="character-pin" alt="character location" src={youAreHere}></img>
    </div>
  )
};

export default YouAreHere;
