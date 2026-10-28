import React from 'react'
import { createPortal } from 'react-dom'
import sf from '../functions/sheet_functions'
import './styles/PrintSheet.css'
import map from '../img/map.jpg'

// minimum inventory rows, so there's room to write in items found during play
const INVENTORY_LINES = 14
const MONEY_LINES = 4

const blankLines = (count, keyPrefix) => (
  Array.from({length: count}, (_, index) => <li key={`${keyPrefix}-${index}`} className="print-blank" />)
)

// Only visible when printing (see PrintSheet.css). Portalled to <body> because
// .App's fixed height and overflow: hidden would clip it to a single page.
const PrintSheet = ({character, items, money}) => {

  const {name, personality, profession, motivation} = character

  return createPortal(
    <div className="print-sheet">
      <section className="print-page">
        <header className="print-header">
          <div className="print-title">Death on the Arrow</div>
          <div className="print-name">{name}</div>
          <div className="print-identity">{personality.name} {profession.name} · {motivation.name}</div>
        </header>

        <div className="print-columns">
          <div className="print-column">
            <h2>Aptitudes</h2>
            <table className="print-verbs">
              <tbody>
                {Object.entries(personality.verbs).map(([verb, value]) => (
                  <tr key={verb}>
                    <td>{sf.capitalizeWord(verb)}</td>
                    <td className="print-verb-value">{value < 0 ? value : `+${value}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="print-hint">Roll two six-sided dice and add the modifier.</div>

            <h2>Money</h2>
            <ul className="print-lines">
              <li>${(money / 100).toFixed(2)}</li>
              {blankLines(MONEY_LINES, 'money')}
            </ul>
          </div>

          <div className="print-column">
            <h2>Inventory</h2>
            <ul className="print-lines">
              {items.map((item, index) => <li key={`item-${index}`}>{item}</li>)}
              {blankLines(Math.max(INVENTORY_LINES - items.length, 2), 'item')}
            </ul>
          </div>
        </div>

        <div className="print-columns">
          <div className="print-column">
            <h2>{profession.name}</h2>
            <div className="print-text">{profession.text}</div>
          </div>
          <div className="print-column">
            <h2>{motivation.name}</h2>
            <div className="print-text">{motivation.text}</div>
          </div>
        </div>

        <h2>Notes</h2>
        <div className="print-notes" />
      </section>

      <section className="print-page print-map-page">
        <img className="print-map" alt="map" src={map} />
      </section>
    </div>,
    document.body
  )
}

export default PrintSheet
