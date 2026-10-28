import { render, screen, fireEvent } from '@testing-library/react'
import SetChar from './SetChar'

const heading = () => document.querySelector('.picker-heading').textContent
const choose = (index = 0) => {
  const option = document.querySelectorAll('.option')[index]
  const name = option.textContent
  fireEvent.click(option)
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  return name
}
const back = () => fireEvent.click(screen.getByRole('button', { name: 'Back' }))

const start = (setCharacter = jest.fn()) => {
  render(<SetChar setCharacter={setCharacter} />)
  fireEvent.change(document.querySelector('#charname'), { target: { value: 'Ada' } })
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  return setCharacter
}

test('Back steps to the previous chooser, and from the first one to the name screen with the name kept', () => {
  start()
  expect(heading()).toBe('How would you describe yourself?')
  choose()
  expect(heading()).toBe('What do you do?')

  back()
  expect(heading()).toBe('How would you describe yourself?')

  back()
  expect(document.querySelector('#charname')).toHaveValue('Ada')
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  expect(heading()).toBe('How would you describe yourself?')
})

test('going back shows the earlier choice selected, ready to continue', () => {
  start()
  const personality = choose(2)
  back()
  expect(document.querySelector('.option.selected')).toHaveTextContent(personality)
  expect(document.querySelector('.details-card.visible')).toHaveTextContent(personality)
  expect(screen.getByRole('button', { name: 'Continue' })).toBeEnabled()

  choose(0)
  expect(heading()).toBe('What do you do?')
  expect(document.querySelector('.option.selected')).toBeNull()
})

test('going back undoes the earlier choice and its money', () => {
  const setCharacter = start()
  choose(0)
  back()
  const personality = choose(1)
  const profession = choose(0)
  const motivation = choose(0)

  const character = setCharacter.mock.calls[0][0]
  expect(character.personality.name).toBe(personality)
  expect(character.profession.name).toBe(profession)
  expect(character.motivation.name).toBe(motivation)
  const expectedMoney = [character.personality, character.profession, character.motivation]
    .reduce((sum, option) => sum + (option.money || 0), 0)
  expect(character.money || 0).toBe(expectedMoney)
})

test('Back does not reopen the instructions page', () => {
  render(<SetChar setCharacter={jest.fn()} />)
  fireEvent.change(document.querySelector('#charname'), { target: { value: 'Ada' } })
  fireEvent.click(screen.getByRole('button', { name: 'Continue with instructions' }))
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  choose()
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
  expect(heading()).toBe('What do you do?')

  back()
  expect(document.querySelector('.info-page')).toBeNull()
  expect(heading()).toBe('How would you describe yourself?')
})
