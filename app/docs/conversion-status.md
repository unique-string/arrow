# Legacy → React Conversion Status

✅ ported · ⚠️ ported with differences · ❌ missing · ➕ new in React

| Feature | Status | Notes |
|---|---|---|
| Intro text + name entry | ✅ | Legacy uses a custom modal for "no name"; React uses `alert()` |
| Optional instructions | ➕ | "Continue with instructions" shows `InfoPage` before each step |
| Personality picker | ✅ | Cards with hover → checkmark to confirm (legacy: radio + Continue) |
| Sport picker for Sporty | ❌ | React Sporty characters keep the placeholder item "sports equipment\*" |
| Profession picker | ⚠️ | "Assistant" renamed "Personal Assistant"; **its −1 to positive skills isn't applied** |
| Motivation picker | ✅ | |
| Back / change a choice | ❌ (both) | Neither version can go back |
| Character header (name, type, job, reason) | ❌ | Legacy shows "*Name* — *type job, reason*"; React sheet shows no identity |
| Verb table + click to roll | ⚠️ | 1d6 → **2d6**, color bands rescaled; +1 shown black (only ≥ +2 is green) |
| Roll breakdown ("4 + 2") | ✅ | |
| Situational bonus text | ⚠️ | React shows full profession + motivation text, run together without a separator; legacy shows the shorter `shorthand` |
| Money display + add/subtract | ✅ | React correctly blocks going negative; legacy's error flash never worked |
| Inventory view | ✅ | Legacy shows a read-only list |
| Inventory add/remove | ➕ ⚠️ | Edits are lost when the modal closes (see issues) |
| Map | ➕ ⚠️ | Legacy shows a static image (and the image file is missing). React has a draggable "you are here" marker and text pins, but it's loaded via an iframe of the app itself |
| Violence rules page | ⚠️ | Content written in `info.js`, never reachable |
| Persistence (reload keeps character) | ❌ (both) | All state is in memory |

## Suggested order to finish the port

1. Fix the data-flow bugs that lose state: inventory lifted to `CharSheet`, map rendered directly instead of via iframe.
2. Restore missing rules: the Assistant penalty and the Sporty → sport step (add `sports.js` to `src/data/`).
3. Show the character's identity on the sheet; separate the bonus texts.
4. Decide where the violence page lives (a button on the sheet?).
5. Remove the legacy and dead files once you're satisfied (see [project-layout.md](project-layout.md)).
6. Optional: persist the character to `localStorage`; upgrade to React 18 (`createRoot`).
