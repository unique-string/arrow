# Project Layout

Paths are relative to the workspace root (`code/`).

```
code/
├── deathweb.html        LEGACY app entry (static page, loads jQuery 3.6 from Google CDN)
├── deathweb.js          LEGACY app logic + all game data inlined (~1,300 lines)
├── style.css            LEGACY styles
├── assets/              LEGACY assets — only trash-icon.png (map.jpg is missing, see issues)
├── data/                DEAD — early draft of types/jobs/reasons; not loaded by anything
├── originals/           DEAD — "Simple HTML Quiz" template the legacy app was forked from
├── package.json         Only depends on create-react-app (the scaffolder)
├── node_modules/        Scaffolder's dependencies
└── arrow/               REACT app (Create React App 5, React 17, react-router-dom 6)
    ├── .env             PORT=4040
    ├── package.json     "start": "set PORT=3030 && react-scripts start"
    ├── docs/            ← these docs
    ├── public/          CRA shell (index.html titled "Death on the Arrow")
    └── src/
        ├── index.js         ReactDOM.render (React 17 API)
        ├── App.js           Router: "/" → SetChar or CharSheet; "/assets/map" → Map
        ├── App.test.js      Stock CRA test ("learn react" link), will fail
        ├── components/
        │   ├── SetChar.js     Creation flow controller (name → personality → profession → motivation)
        │   ├── TakeName.js    Intro text + name input (+ a leftover IFrame/Map experiment)
        │   ├── Picker.js      Shuffled option cards with hover-to-confirm checkmark
        │   ├── InfoPage.js    Optional "instructions" pages between steps
        │   ├── CharSheet.js   Verb list (click to roll), money, roll display, inventory/map buttons
        │   ├── Inventory.js   Modal with add/remove items
        │   ├── Map.js         Map image + "you are here" marker + text pins
        │   ├── Pin.js         One editable pin label with delete button
        │   ├── PinModal.js    "Place a pin?" confirm popup
        │   ├── YouAreHere.js  Draggable character marker
        │   ├── Draggable.js   Custom drag hook (named `Drag`, imported as `Draggable`)
        │   ├── IFrame.js      Portal-into-iframe helper (experiment, used only by TakeName)
        │   ├── Game.js        Empty file
        │   └── styles/*.css   Per-component styles
        ├── data/
        │   ├── types.js     10 personality types (text is JSX)
        │   ├── jobs.js      12 professions
        │   ├── reasons.js   6 motivations (text is JSX)
        │   └── info.js      Instruction page content (JSX), incl. unused "violence" page
        ├── functions/
        │   ├── picker_functions.js  Fisher–Yates-ish shuffle, step headings
        │   └── sheet_functions.js   Roll, roll color, money change (+ two empty stubs)
        └── img/                     Icons + map.jpg
```

## Running

- **Legacy:** open `deathweb.html` directly in a browser. It needs network access for jQuery, which is barely used (one broken `.draggable()` call).
- **React:** `cd arrow && npm start`. The start script uses Windows `set` syntax and asks for port 3030, while `.env` says 4040. The shell variable wins in CRA, so expect 3030. `npm run build` works.

## Dependencies worth noting

- `react-draggable` is in `package.json` but unused. Dragging is done by the custom hook in `Draggable.js`.
- `react-router-dom` is used only so the map can be loaded at `/assets/map` inside an iframe. See [issues.md](issues.md#map-runs-a-second-app-instance-in-an-iframe).
