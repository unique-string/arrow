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
| Inventory add/remove | ➕ | Edits persist while the sheet is open (not across reloads) |
| Map | ➕ | Legacy shows a static image (and the image file is missing). React has a draggable "you are here" marker labelled with the character's name, plus editable text pins |
| Violence rules page | ⚠️ | Content written in `info.js` (now including attack results). Printed on page 2 of the print sheet, but never reachable in the app |
| Persistence (reload keeps character) | ❌ (both) | All state is in memory |

## Suggested order to finish the port

The inventory and map state bugs are fixed (see [issues.md](issues.md#resolved-2026-10-27)).

1. Restore missing rules: the Assistant penalty and the Sporty → sport step (add `sports.js` to `src/data/`).
2. Show the character's identity on the sheet; separate the bonus texts.
3. Decide where the violence page lives (a button on the sheet?).
4. Retire the legacy app (`deathweb.*`, `style.css`, `assets/` at the repo root) once React reaches parity.
5. Optional: persist the character to `localStorage`; upgrade to React 18 (`createRoot`).
