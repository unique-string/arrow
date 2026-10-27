# Issues Found

Ranked roughly by player impact. Paths are relative to `arrow/` unless noted.

## React app: functional bugs

### Inventory edits are lost when the modal closes
**✅ Fixed 2026-10-27.** Covered by `src/components/CharSheet.test.js`.
[src/components/Inventory.js](../src/components/Inventory.js) keeps the list in its own `useState(items)`. `CharSheet` unmounts the modal on close and rebuilds `items` from `personality.items.concat(profession.items)` on every render, so any added or removed items disappear. **Fix:** keep the item list in `CharSheet` (or in the character object) and pass setters down.

### Map runs a second app instance in an iframe
**✅ Fixed 2026-10-27.**
[src/components/CharSheet.js:40](../src/components/CharSheet.js#L40) embeds `<iframe src="./assets/map">`. That route loads the entire React app again, with its own empty state:
- `characterName` is always `''`, so the "you are here" label is blank. (`data-player-name` on the iframe is never read.)
- Clicking the overlay calls the *iframe's* `setShowMap`, so it can't close the parent modal. Only the parent's "X" button works.
- The iframe is always mounted (hidden with `opacity: 0`), so the second app is always running.
- Pins and marker position are lost on page reload.

**Fix:** render `<Map>` directly in `CharSheet` and drop the `/assets/map` route. The router can probably be removed entirely.

### Map pin bookkeeping is broken
**✅ Fixed 2026-10-27.** Covered by `src/components/CharSheet.test.js`.
In [src/components/Map.js](../src/components/Map.js):
- `deletePin` replaces a pin with a placeholder `{index: null, x: 0, y: 0}`. The placeholder is still rendered as a `Pin` with a trash button at the map's top-left corner (a "ghost" pin).
- The `useEffect` on `pins` mutates state objects and overwrites every `index`, placeholders included. Gaps therefore never get `index === null` back, and the gap-reuse logic in `setPin` never fires.
- `firstGap ? … : push` treats a gap at index 0 as "no gap".
- On the first pin, `lastPin` is `undefined`, so the new pin gets `index: undefined` until the effect patches it.
- `lastPin` is module-level, so it's shared between every `Map` instance (there are two; see above and below).

**Fix:** store pins as an array of `{id, x, y, text}` with stable ids (counter or `crypto.randomUUID()`), delete with `filter`, and key by `id`.

### Pins are placed in viewport coordinates
**✅ Fixed 2026-10-27.**
`PinModal` uses `clientX/clientY`, and pins are translated by those values. Scrolling or resizing moves pins off their spot on the map. **Fix:** store coordinates relative to the map image (ideally as percentages).

### Pin input steals selection
**✅ Fixed 2026-10-27.**
[src/components/Pin.js:38](../src/components/Pin.js#L38): `if (…) pinRef.current.focus(); pinRef.current.select()`. Without braces, `select()` runs on every pin whenever any pin changes.

### Hidden map in an iframe on the name screen
**✅ Fixed 2026-10-27.**
[src/components/TakeName.js:39-41](../src/components/TakeName.js#L39-L41) renders `<IFrame><Map /></IFrame>`, a leftover experiment. That `Map` gets no props, so clicking its overlay calls `undefined()`, and `PinModal` queries `#map` on the parent document, where it doesn't exist. **Fix:** delete those lines (and probably `IFrame.js`).

### "You are here" initial position is invalid
**✅ Fixed 2026-10-27.**
`Map` seeds `playerMapPosition` with a DOM element or the string `'no position yet'`, which then gets used as a CSS `transform`. It's harmless only because browsers ignore invalid transforms.

## React app: rules and data gaps

- **Assistant penalty not applied.** Legacy decrements every positive verb by 1; React doesn't.
- **No sport step for Sporty.** The "sports equipment\*" placeholder stays in the inventory.
- **Nosy keeps "one dollar" as an item.** [Picker.js:32](../src/components/Picker.js#L32) strips items containing `'dollars'` (plural only).
- **Shared data is mutated.** `Picker.confirm` splices items out of the imported data module, and it also mutates `newCharacterData` *after* passing it to `setCharacterData`. This works today but is fragile. **Fix:** compute a fresh object and then set it once.
- **Violence info page is unreachable.** No code path sets `currentChoice` to `'violence'`.
- **Bonus text runs together.** `CharSheet` renders `{profession.text}{motivation.text}` with no separator.

## React app: cleanup

- ~~`App.js`: unused `logo` and `Redirect` imports; ignored `showMap` state.~~ Fixed: the router is gone. `react-router`/`react-router-dom` are now unused dependencies, and `src/components/IFrame.js` is now an unused file.
- `App.test.js`: stock CRA test for a "learn react" link, will fail. Replace it with a real smoke test.
- `Game.js`: empty file. `sf.showInventory` and `sf.showMap`: empty stubs.
- `Draggable.js`: a hook named `Drag` that is imported as `Draggable` and doesn't follow the `use…` naming, so lint can't check hook rules. Rename it to `useDraggable`. Or use the already-installed but unused `react-draggable`.
- Many `console.log` calls throughout. About 20 lint warnings at build time (unused vars, a missing hook dependency, `array-callback-return` in `InfoPage`).
- `package.json` `start` script: `set PORT=3030 && …` is Windows-only (and sets `PORT="3030 "` with a trailing space), and it conflicts with `.env`'s `PORT=4040`. Pick one; `.env` alone is portable.
- React 17 `ReactDOM.render`, CRA 5. CRA is no longer maintained. Consider Vite when convenient.

## Legacy app (`code/deathweb.*`)

These matter only if the legacy app will keep being used.

- `assets/map.jpg` is missing (the map modal shows a broken image). The React copy is at `arrow/src/img/map.jpg`.
- Inventory "draggable": `$('inventory-modal')` is missing the `#`, and jQuery UI isn't loaded. jQuery is otherwise unused.
- Money: the error flash in `moneyGoesDown` never runs (`"2px solid red;"` is invalid, and `setTimeout` gets a non-function). `moneyGoesUp` accepts negative input, so the balance can go below $0. Inputs like `0.1` produce fractional cents.
- `checkForAnswer`, `nextQuestion`, `resetOptionBackground`, and `welcome` are dead quiz-template code.
- Player name is injected via `innerHTML` (self-XSS only; low risk).

## Workspace-level dead files

- `code/originals/`: the quiz template.
- `code/data/`: an early data draft. `types.js` has a syntax error (missing comma) and only one type.
- `code/package.json` + `code/node_modules/`: only `create-react-app`, used once to scaffold `arrow/`.
