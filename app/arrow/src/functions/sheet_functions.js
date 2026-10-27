const sf = {

  capitalizeWord: (str) => {
    return str[0].toUpperCase() + str.substring(1, str.length)
  },

  rollModified: (e, setRoll) => {
    const modName = e.currentTarget.dataset.name
    const modifier = +e.currentTarget.dataset.value
    const dice = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)
    const modifiedValue = dice + modifier
    const displayModifier = Math.abs(modifier)
    const operator = modifier < 0 ? '-' : '+'

    const newRoll = {
      value: modifiedValue,
      verb: modName,
      hash: Math.random(),
      detail: `${dice} ${operator} ${displayModifier}`
    }
    setRoll(newRoll)
  },

  rollValueColor: (value) => {
    let color
    if (value <= 4){
      color = 'red'
    } else if (value <= 9){
      color = 'black'
    } else if (value <= 12){
      color = 'green'
    } else if (value > 12){
      color = 'gold'
    }
    return color
  },

  changeMoney: (e, characterDetails) => {
    const value = +document.getElementById("money-input").value
    console.log(value)
    const increment = value * 100
    const operator = e.currentTarget.value
    document.getElementById("money-input").value = ''
    if (!increment || !isFinite(increment) || (operator === '-' && characterDetails.money - increment < 0)) {
      return characterDetails
    } else {
      const newCharacterDetails = {...characterDetails}
      if (operator === '+') newCharacterDetails.money += increment
      if (operator === '-') newCharacterDetails.money -= increment
      console.log(newCharacterDetails)
      return newCharacterDetails
    }
    
  },

  showInventory: () => {

  },

  

  showMap: () => {

  }

}

export default sf