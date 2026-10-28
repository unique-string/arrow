import { render, screen, fireEvent } from '@testing-library/react'
import Picker from './Picker'

const renderPicker = (setCharacterData = jest.fn()) => {
  render(<Picker currentChoice="motivation" characterData={{ name: 'Ada' }} setCharacterData={setCharacterData} />)
  return setCharacterData
}
const continueButton = () => screen.getByRole('button', { name: 'Continue' })
const options = () => document.querySelectorAll('.option')
const details = () => document.querySelector('.details-card.visible')

test('Continue stays disabled until an option is chosen, then saves that option', () => {
  const setCharacterData = renderPicker()
  expect(options()).toHaveLength(6)
  expect(continueButton()).toBeDisabled()

  fireEvent.click(options()[0])
  expect(continueButton()).toBeEnabled()

  fireEvent.click(continueButton())
  const saved = setCharacterData.mock.calls[0][0]
  expect(saved.name).toBe('Ada')
  expect(saved.motivation.name).toBe(options()[0].textContent)
})

test('details box previews the hovered option and falls back to the selected one', () => {
  renderPicker()
  expect(details()).toHaveTextContent('Choose an option to see its details.')

  const [first, second] = options()
  fireEvent.click(first)
  expect(details()).toHaveTextContent(first.textContent)

  fireEvent.mouseEnter(second)
  expect(details()).toHaveTextContent(second.textContent)

  fireEvent.mouseLeave(second)
  expect(details()).toHaveTextContent(first.textContent)
})
