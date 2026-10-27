import types from '../data/types'
import jobs from '../data/jobs'
import reasons from '../data/reasons'

const pickOption = {
  personality: types,
  profession: jobs,
  motivation: reasons,
  done: ['Have fun!']
}

const headings = {
  personality: 'How would you describe yourself?',
  profession: 'What do you do?',
  motivation: 'What moves you?'
}

const pf = {
  nameInput: (e, setCharacterName) => {
    console.log(e.target.value)
    setCharacterName(e.target.value)
  },
  
  displayOptions: (menu) => {
    const options = [...pickOption[menu]]
    for (let i=0; i < options.length; i++) {
      const x = Math.floor(Math.random() * options.length)  // gets random array position
      const data = options[i]  // stores data at given array position
      options[i] = options[x];  // swaps given position data with random position data
      options[x] = data;  // replaces data at random position with given position data
    }
    return options
  },

  setHeading: (menu) => {
    return headings[menu]
  } 

}

export default pf