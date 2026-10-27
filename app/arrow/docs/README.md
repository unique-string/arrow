# Death on the Arrow — Project Analysis

Analysis from a read-through on 2026-10-27. The game is a 1974 murder mystery set on the *Prairie Arrow*, a Chicago–Denver express train. The app is a character creator and dice roller for it.

| Doc | What's in it |
|---|---|
| [project-layout.md](project-layout.md) | What each folder and file is, and which ones are live, legacy, or dead |
| [game-rules.md](game-rules.md) | The game content and mechanics encoded in the code (verbs, types, jobs, reasons, dice, money) |
| [conversion-status.md](conversion-status.md) | Feature-by-feature comparison of the legacy HTML app and the React app |
| [issues.md](issues.md) | Bugs and cleanup items found, ranked by impact |

## TL;DR

- **There are two apps.** The original is a static jQuery-era page (`../../deathweb.html` + `deathweb.js`). The React rewrite (`arrow/`, Create React App, React 17) is partway done. It roughly reached parity on character creation and the sheet, and added new work (an interactive map with pins, inventory editing, and info pages).
- **The React app builds** (`npx react-scripts build` succeeded on Node 22.17, with ~20 lint warnings and no errors).
- **The dice rules changed between versions.** Legacy rolls **1d6 + modifier**. React rolls **2d6 + modifier**, and its info text says "a pair of six-sided dice". So 2d6 looks intentional, but confirm it.
- **Missing from React:** the Sporty sport-selection step, the Assistant job's −1 penalty, and the "violence" info page (written but never shown).
- **Biggest React bugs:** inventory edits are lost every time the modal closes. The map runs a second copy of the whole app inside an `<iframe>`, so it never knows the character's name and its close/overlay handlers can't close the parent. Map pin bookkeeping leaves "ghost" pins after deletion.
- **Cleanup candidates:** `originals/` (the quiz template the legacy app was forked from), the root `data/` folder (an older draft with a syntax error), the root `package.json`/`node_modules` (only the CRA scaffolder), `Game.js` (empty), and the stale `App.test.js`.
