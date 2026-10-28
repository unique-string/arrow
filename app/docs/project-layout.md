# Project Layout

Paths are relative to the repository root.

```
./
├── README.md
├── .gitignore
├── deathweb.html        LEGACY app entry (static page, loads jQuery 3.6 from Google CDN)
├── deathweb.js          LEGACY app logic + all game data inlined (~1,300 lines)
├── style.css            LEGACY styles
├── assets/              LEGACY assets: only trash-icon.png (map.jpg is missing, see issues)
└── app/                 REACT app (Create React App 5, React 17)
    ├── .env             PORT=4040
    ├── .gitignore       Ignores node_modules, build, coverage, local .env files
    ├── package.json     "start": "set PORT=3030 && react-scripts start"
    ├── docs/            ← these docs
    ├── public/          CRA shell (index.html titled "Death on the Arrow")
    └── src/
        ├── index.js         ReactDOM.render (React 17 API)
        ├── App.js           Shows SetChar until a character exists, then CharSheet
        ├── setupTests.js    Loads jest-dom matchers
        ├── components/
        │   ├── SetChar.js         Creation flow controller (name → personality → profession → motivation)
        │   ├── TakeName.js        Intro text + name input
        │   ├── Picker.js          Shuffled option cards with hover-to-confirm checkmark
        │   ├── InfoPage.js        Optional "instructions" pages between steps
        │   ├── CharSheet.js       Verb list (click to roll), money, roll display; owns inventory items
        │   │                      and keeps Map mounted (hidden when closed)
        │   ├── CharSheet.test.js  Inventory persistence, print sheet, and map pin tests
        │   ├── PrintSheet.js      Print-only sheet (character + dice rules, violence rules, map), portalled to <body>
        │   │                      (styles/PrintSheet.css hides the app and shows it under @media print)
        │   ├── Inventory.js       Modal with add/remove items (state lives in CharSheet)
        │   ├── Map.js             Map image + "you are here" marker + text pins
        │   ├── Pin.js             One editable pin label with delete button
        │   ├── PinModal.js        "Place a pin?" confirm popup
        │   ├── YouAreHere.js      Draggable character marker
        │   ├── Draggable.js       Custom drag hook (named `Drag`, imported as `Draggable`)
        │   └── styles/*.css       Per-component styles
        ├── data/
        │   ├── types.js     10 personality types (text is JSX)
        │   ├── jobs.js      12 professions
        │   ├── reasons.js   6 motivations (text is JSX)
        │   └── info.js      Instruction page content (JSX), incl. "violence" page (printed, unreachable in the app)
        ├── functions/
        │   ├── picker_functions.js  Shuffle, step headings
        │   └── sheet_functions.js   Roll, roll color, money change (+ two empty stubs)
        └── img/                     Icons + map.jpg
```

## Running

- **Legacy:** open `deathweb.html` directly in a browser. It needs network access for jQuery, which is barely used (one broken `.draggable()` call).
- **React:** `cd app && npm install && npm start`. The start script uses Windows `set` syntax and asks for port 3030, while `.env` says 4040. The shell variable wins in CRA, so expect 3030.
- **Tests:** `cd app && npm test` (watch mode), or `npm test -- --watchAll=false` for a single run.
- **Build:** `cd app && npm run build`.

## Map state

`CharSheet` renders `<Map>` once and hides it with `display: none` when closed, rather than unmounting it. That's what keeps pins and the "you are here" marker position between openings. If the map is ever conditionally rendered, that state will need to move up into `CharSheet` the way inventory items did.

Pin and pin-popup positions are stored as percentages of the map container (`{id, x, y, text}`), and CSS anchors each pin's stem tip at that point.

## Mobile layout

- The page scrolls vertically (`.App` only clips sideways overflow). Modals (`.modal-container`) are `position: fixed`, so they stay centered when the page is scrolled.
- Breakpoints: 600px stacks the character sheet (verbs and roll box on top, description below); 550px and 700px tighten the picker and the name/info pages; 900px puts the picker in two columns for tablets.
- Touch: hover highlights are wrapped in `@media (hover: hover)` so they don't stick after a tap. `@media (pointer: coarse)` enlarges small buttons and sets inputs to 16px, which stops iOS from zooming in on focus.
- Map: `.map-viewport` sizes the frame to fit the screen (including landscape phone height), and `.map-container` keeps map.jpg's 3800:1600 ratio. On a portrait phone the map stays 680px wide and pans sideways inside `.map-scroll`. "Clear pins" sits outside the scroller so it stays in place.

## Dependencies worth noting

- `react-router` and `react-router-dom` are in `package.json` but no longer imported. They were used only to load the map in an iframe.
- `react-draggable` is in `package.json` but unused. Dragging is done by the custom hook in `Draggable.js`.
