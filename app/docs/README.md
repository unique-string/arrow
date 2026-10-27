# Death on the Arrow — Project Docs

The game is a 1974 murder mystery set on the *Prairie Arrow*, a Chicago–Denver express train. The app is a character creator and dice roller for it.

| Doc | What's in it |
|---|---|
| [project-layout.md](project-layout.md) | What each folder and file is, how to run things, and how map state is kept |
| [game-rules.md](game-rules.md) | The game content and mechanics encoded in the code (verbs, types, jobs, reasons, dice, money) |
| [conversion-status.md](conversion-status.md) | Feature-by-feature comparison of the legacy HTML app and the React app |
| [issues.md](issues.md) | Open bugs and cleanup items, ranked by impact, plus what's been resolved |

## Current state (2026-10-27)

- **There are two apps.** The original is a static jQuery-era page at the repo root (`deathweb.html` + `deathweb.js`). The React rewrite is in `app/` (Create React App, React 17). React has roughly reached parity on character creation and the sheet, and adds an interactive map with pins, inventory editing, and info pages.
- **The React app builds and its tests pass.** `CharSheet.test.js` covers inventory persistence and map pins.
- **The dice rules changed between versions.** Legacy rolls **1d6 + modifier**. React rolls **2d6 + modifier**, and its info text says "a pair of six-sided dice". 2d6 looks intentional, but confirm it.
- **Missing from React:** the Sporty sport-selection step, the Assistant job's −1 penalty, the character's name/type on the sheet, and the "violence" info page (written but never shown).
- **Fixed:**
  - Inventory edits are kept when the modal closes.
  - The map is rendered directly instead of through an iframe.
  - Pins have stable ids and map-relative positions.
  - The dead files (quiz template, old data draft, scaffolder, `IFrame.js`, `Game.js`, stock test) were removed in the restructure.
