import { render, screen, fireEvent, within } from '@testing-library/react'
import CharSheet from './CharSheet'

const character = {
  name: 'Ada',
  personality: {
    name: 'Nosy',
    verbs: { investigate: 3, notice: 1 },
    items: ['magnifying glass'],
  },
  profession: { name: 'Nurse', text: 'nurse text', items: ['stethoscope'] },
  motivation: { name: 'Puzzle Lover', text: 'puzzle text' },
  money: 100,
}

const openInventory = () => fireEvent.click(screen.getByAltText('inventory'))
const closeInventory = () => fireEvent.click(screen.getByText('X', { selector: '.inventory-close' }))

test('inventory edits survive closing and reopening the modal', () => {
  render(<CharSheet character={character} />)

  openInventory()
  fireEvent.click(screen.getAllByAltText('remove item')[0])
  fireEvent.mouseEnter(document.querySelector('.add-item'))
  fireEvent.change(document.getElementById('item-input'), { target: { value: 'lockpick' } })
  fireEvent.click(screen.getByAltText('add item'))
  closeInventory()

  openInventory()
  const inventory = within(document.querySelector('.items'))
  expect(inventory.queryByText('magnifying glass')).toBeNull()
  expect(inventory.getByText('stethoscope')).toBeInTheDocument()
  expect(inventory.getByText('lockpick')).toBeInTheDocument()

  // the print sheet reflects the edited inventory too
  const printSheet = within(document.querySelector('.print-sheet'))
  expect(printSheet.queryByText('magnifying glass')).toBeNull()
  expect(printSheet.getByText('lockpick')).toBeInTheDocument()
})

test('print sheet shows identity, aptitudes, money, and bonus text, and the button prints', () => {
  window.print = jest.fn()
  render(<CharSheet character={character} />)

  const printSheet = within(document.querySelector('.print-sheet'))
  expect(printSheet.getByText('Ada')).toBeInTheDocument()
  expect(printSheet.getByText('Nosy Nurse · Puzzle Lover')).toBeInTheDocument()
  expect(printSheet.getByText('Investigate').nextSibling).toHaveTextContent('+3')
  expect(printSheet.getByText('$1.00')).toBeInTheDocument()
  expect(printSheet.getByText('nurse text')).toBeInTheDocument()
  expect(printSheet.getByText('puzzle text')).toBeInTheDocument()
  expect(printSheet.getByAltText('map')).toBeInTheDocument()
  expect(printSheet.getByText('Weapons')).toBeInTheDocument()
  expect(printSheet.getByText('Attack Results')).toBeInTheDocument()

  fireEvent.click(screen.getByTitle('Print or save as PDF'))
  expect(window.print).toHaveBeenCalled()
})

const openMap = () => fireEvent.click(document.querySelector('.between-button-icon[alt="map"]'))

const placePin = (field, clientX, clientY) => {
  fireEvent.mouseDown(field, { button: 0, clientX, clientY })
  fireEvent.click(screen.getByAltText('yes'))
}

test('map pins can be placed, labelled, deleted, and persist across closing the map', () => {
  render(<CharSheet character={character} />)
  openMap()

  const field = document.querySelector('.pin-field')
  field.getBoundingClientRect = () => ({ left: 100, top: 50, width: 1000, height: 400 })

  expect(within(document.querySelector('.map-container')).getByText('Ada')).toBeInTheDocument()

  placePin(field, 600, 250)
  const firstInput = document.querySelector('.pin-text-input')
  expect(firstInput).toHaveFocus()
  fireEvent.change(firstInput, { target: { value: 'dining car' } })
  fireEvent.keyUp(firstInput, { key: 'Enter' })

  const pins = () => Array.from(document.querySelectorAll('.pin-container'))
  expect(pins()).toHaveLength(1)
  expect(pins()[0].style.left).toBe('50%')
  expect(pins()[0].style.top).toBe('50%')

  placePin(field, 200, 150)
  fireEvent.blur(document.querySelector('.pin-text-input'))
  expect(pins()).toHaveLength(2)

  // deleting the first pin leaves exactly one, with no placeholder left behind
  fireEvent.click(within(pins()[0]).getByAltText('delete pin'))
  expect(pins()).toHaveLength(1)
  expect(screen.queryByText('dining car')).toBeNull()
  expect(screen.getByText('---')).toBeInTheDocument()

  // a click on the map while a label is open closes the label without offering a new pin
  fireEvent.click(screen.getByText('---'))
  fireEvent.mouseDown(field, { button: 0, clientX: 300, clientY: 300 })
  expect(screen.queryByText('Place a pin?')).toBeNull()

  // overlay click closes the map; pins are still there when it reopens
  fireEvent.click(document.querySelector('.map-window').previousSibling)
  expect(document.querySelector('.map-window').closest('[style]').style.display).toBe('none')
  openMap()
  expect(pins()).toHaveLength(1)
})
