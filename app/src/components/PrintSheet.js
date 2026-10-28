import React from 'react'
import { createPortal } from 'react-dom'
import sf from '../functions/sheet_functions'
import info from '../data/info'
import './styles/PrintSheet.css'
import map from '../img/map.jpg'

// minimum inventory lines (split across two columns), so there's room to write in items found during play
const INVENTORY_LINES = 16
// more than will ever fit; the notes box clips to whatever height is left
const NOTES_LINES_MAX = 30

const blankLines = (count, keyPrefix) => (
  Array.from({length: count}, (_, index) => <li key={`${keyPrefix}-${index}`} className="print-blank" />)
)

// Only visible when printing (see PrintSheet.css). Portalled to <body> because
// .App's fixed height and overflow: hidden would clip it to a single page.
const PrintSheet = ({character, items, money}) => {

  const {name, personality, profession, motivation} = character
  // at least two blank lines, and an even total so both inventory columns end level
  const inventoryLines = Math.max(INVENTORY_LINES, items.length + 2)
  const inventoryBlanks = inventoryLines + (inventoryLines % 2) - items.length

  return createPortal(
    <div className="print-sheet">
      <section className="print-page print-main">
        <div className="print-character">
          <header className="print-header">
            <div className="print-title">Death on the Arrow</div>
            <div className="print-name">{name}</div>
            <div className="print-identity">{personality.name} {profession.name} · {motivation.name}</div>
          </header>

          <div className="print-columns">
            <div className="print-column print-stats">
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
            </div>

            <div className="print-column">
              <h2>Inventory</h2>
              <ul className="print-lines print-inventory">
                {items.map((item, index) => <li key={`item-${index}`}>{item}</li>)}
                {blankLines(inventoryBlanks, 'item')}
              </ul>
              <div className="print-money">
                <span className="print-money-label">Money</span>
                <span>${(money / 100).toFixed(2)}</span>
              </div>
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
          <div className="print-notes">
            {Array.from({length: NOTES_LINES_MAX}, (_, index) => <div key={`note-${index}`} />)}
          </div>
        </div>

        {/* general rules, drawn from the same copy as the in-app instruction pages */}
        <aside className="print-rules">
          <h2>Rolling the Dice</h2>
          {info.personality.intro}
          {info.personality.body}
        </aside>
      </section>

      {/* combat reference: everything about violence on one page */}
      <section className="print-page print-violence-page">
        <div className="print-violence-column">
          <h2>Violence</h2>
          {info.violence.body1}
          <h2>Attack Results</h2>
          {info.violence.results}
        </div>
        <div className="print-violence-column">
          <h2>Weapons</h2>
          {info.violence.body2}
          {info.violence.outro}
        </div>
      </section>

      <section className="print-page print-map-page">
        <img className="print-map" alt="map" src={map} />
      </section>
    </div>,
    document.body
  )
}

export default PrintSheet
