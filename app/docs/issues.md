# Issues

Open items are ranked roughly by player impact. Paths are relative to the repository root.

## React app: rules and data gaps

- **Assistant penalty not applied.** Legacy decrements every positive verb by 1; React doesn't.
- **No sport step for Sporty.** The "sports equipment\*" placeholder stays in the inventory.
- **Character identity not shown on the sheet.** Legacy shows "*Name* — *type job, reason*".
- **Nosy keeps "one dollar" as an item.** [Picker.js:32](../src/components/Picker.js#L32) strips items containing `'dollars'` (plural only).
- **Shared data is mutated.** `Picker.confirm` splices items out of the imported data module, and it also mutates `newCharacterData` *after* passing it to `setCharacterData`. This works today but is fragile. **Fix:** compute a fresh object and then set it once.
- **Violence info page is unreachable.** No code path sets `currentChoice` to `'violence'`.
- **Bonus text runs together.** `CharSheet` renders `{profession.text}{motivation.text}` with no separator.

## React app: known limitations

- **Map clipping.** Pins and the "Place a pin?" popup are drawn above the click point, inside a container with `overflow: hidden`. They get cut off near the top edge of the map.
- **No persistence.** The character, inventory, pins, and marker position are all in memory and are lost on reload.

## React app: cleanup

- `react-router`, `react-router-dom`, and `react-draggable` are unused dependencies in `app/package.json`.
- `sf.showInventory` and `sf.showMap` in `sheet_functions.js` are empty stubs.
- `Draggable.js`: a hook named `Drag` that is imported as `Draggable` and doesn't follow the `use…` naming, so lint can't check hook rules. Rename it to `useDraggable`.
- Many `console.log` calls throughout. Four lint warnings remain at build time (unused vars in `SetChar`, and `useState` plus `array-callback-return` in `InfoPage`).
- `package.json` `start` script: `set PORT=3030 && …` is Windows-only (and sets `PORT="3030 "` with a trailing space), and it conflicts with `.env`'s `PORT=4040`. Pick one; `.env` alone is portable.
- React 17 `ReactDOM.render`, CRA 5. CRA is no longer maintained. Consider Vite when convenient.
- Test coverage is limited to `CharSheet.test.js`; the creation flow (`SetChar`/`Picker`) has no tests.

## Legacy app (`deathweb.*` at the repo root)

These matter only if the legacy app will keep being used.

- `assets/map.jpg` is missing (the map modal shows a broken image). The React copy is at `app/src/img/map.jpg`.
- Inventory "draggable": `$('inventory-modal')` is missing the `#`, and jQuery UI isn't loaded. jQuery is otherwise unused.
- Money: the error flash in `moneyGoesDown` never runs (`"2px solid red;"` is invalid, and `setTimeout` gets a non-function). `moneyGoesUp` accepts negative input, so the balance can go below $0. Inputs like `0.1` produce fractional cents.
- `checkForAnswer`, `nextQuestion`, `resetOptionBackground`, and `welcome` are dead quiz-template code.
- Player name is injected via `innerHTML` (self-XSS only; low risk).

## Resolved (2026-10-27)

- **Inventory edits lost on close.** Items now live in `CharSheet` state. Covered by `CharSheet.test.js`.
- **Map loaded the whole app in an iframe.** `Map` is now rendered directly in `CharSheet` and kept mounted while hidden. The marker shows the character's name, the overlay and X both close the map, and pins persist across openings. Covered by `CharSheet.test.js`.
- **Pin bookkeeping.** Pins are `{id, x, y, text}` with stable ids and are deleted with `filter`, so there are no ghost pins or gap-reuse bugs. Covered by `CharSheet.test.js`.
- **Pins in viewport coordinates.** Positions are now percentages of the map container.
- **Pin input stole selection.** Only the pin being edited renders an input.
- **Hidden map iframe on the name screen**, and an invalid initial transform on the "you are here" marker.
- **Router and stale imports in `App.js`** (including the deleted `logo.svg`).
- **Dead files removed in the restructure:** the `originals/` quiz template, the old `data/` draft, the root `package.json`/`node_modules` scaffolder, `IFrame.js`, `Game.js`, and the stock `App.test.js`.
