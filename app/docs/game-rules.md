# Game Rules as Encoded in the Code

This is reference material pulled from `app/src/data/*` and the legacy `deathweb.js` at the repo root. Where the two versions differ, both are shown.

## Setting

You're a traveler on the *Prairie Arrow*, an express passenger train between Chicago and Denver. It's Monday, October 8, 1974. At 4:41pm, just after the train reaches open country, someone is going to die.

## Character creation

1. **Name** (free text; a single space is accepted as "nameless")
2. **Personality type**: sets all ten verb modifiers, starting items, and starting money
3. *(Legacy only)* **Sport**, if the type is Sporty: replaces "sports equipment\*" with specific gear
4. **Profession**: situational +1 bonus text and items (Financier also adds money)
5. **Motivation**: situational +1 bonus text

Options are shown in random order at each step.

## Verbs (aptitudes)

Investigate · Notice · Analyze · Muscle · Endure · React · Creep · Intimidate · Persuade · Lie

## Personality types

Modifiers in verb order: Inv / Not / Ana / Mus / End / Rea / Cre / Int / Per / Lie. Every type's modifiers sum to +4.

| Type | Modifiers | Money | Items |
|---|---|---|---|
| Aloof | −1 −1 −1 0 +2 −2 +2 +1 +1 +3 | $2 | sunglasses, toothpick, bottle of vodka |
| Angry | 0 −2 −1 +1 0 +2 0 +3 0 +1 | $7 | switchblade |
| Burly | 0 0 0 +3 +2 0 −2 +1 0 0 | $4 | leather coat, brass knuckles, two protein bars |
| Charming | −2 +1 0 0 +1 0 −1 0 +3 +2 | $10 | toothbrush, toothpaste, comb/hairbrush, soap, nail file |
| Dorky | +2 +2 +3 −1 −2 0 0 −1 0 +1 | $5 | pocket calculator, two books |
| Nosy | +3 +1 +2 0 0 −1 +1 0 −2 −1 | $1 | magnifying glass, listening device |
| Placid | +1 0 +2 +1 +3 −1 0 −1 +1 −2 | $3 | meditation mat, walking stick, Ouija board |
| Sneaky | 0 +1 0 −1 −1 +2 +3 −2 0 +2 | $8 | disguise, lockpick set |
| Sporty | 0 −1 −2 +2 +1 +3 +1 0 +1 −1 | $9 | sports equipment\* |
| Witty | +1 +3 +1 −2 0 +1 0 −1 +1 0 | $6 | Swiss army knife, deck of cards, bag of trail mix |

Money is stored in cents (`money: 200` = $2.00). The "N dollars" entry in each item list is display text that gets stripped on selection.

## Professions

Each gives +1 to skill/action checks in a niche, plus items.

| Job | Niche | Items |
|---|---|---|
| Actuary | Risk / likelihood of mortality | actuarial tables, stubby pencil, reading glasses |
| Bartender | Intoxicated people; identifying beverages | paring knife, church key, four 1.5oz liquor bottles, cocktail shaker |
| Burglar | Property crime; casing targets | blackjack, ski mask, false-bottom suitcase |
| Clairvoyant | Once per 4 game-hours: action check for guidance | divining tools |
| Coach | Motivating people; strategy | athletic tape, stopwatch, whistle |
| Financier | People of wealth/status; +1 Persuade with large sums. **+$40** | Cross pen (gold) |
| Nurse | Bodily conditions | stethoscope, pain pills, first aid kit |
| (Personal) Assistant | −1 to all positive skills; can give +1 to allies' checks where own modifier is 0/+1/+2 | mechanical pencil, notepad, protein bar |
| Roughneck | Heavy objects | work gloves, 30 ft rope |
| Scientist | Own hard-science field | portable laboratory |
| Teacher | Explaining; calming groups | No. 2 pencil, tin of instant coffee, apple |
| Zookeeper | Animals; +1 Endure vs physical harm | binoculars, treats, telescoping shock baton |

The legacy app applies the Assistant's −1 automatically. React does not (see [conversion-status.md](conversion-status.md)).

## Motivations

| Reason | Bonus |
|---|---|
| Sense of Honor | +1 Notice & React when crimes are being committed |
| Shady Dealings | +1 Creep & Lie when authority figures are involved |
| Ego Warrior | +1 Muscle & Endure when people are watching |
| Boredom Warrior | +1 Notice & Investigate when looking at something no one else is |
| Puzzle Lover | +1 Investigate & Analyze for symbols / logical connections |
| I Have My Reasons | +1 Intimidate & React when dealing with physical harm |

## Sports (legacy only, for Sporty)

Baseball, Football, Soccer, Hockey, Basketball, Lacrosse, Curling, Martial Arts (+1 Muscle & React in violent situations, stored as an "item"), Track & Field, Golf, Boxing, Ballet. Each adds 2–3 gear items.

## Dice

| | Legacy | React |
|---|---|---|
| Roll | 1d6 + modifier | **2d6** + modifier |
| Red | ≤ 2 | ≤ 4 |
| Black | 3–4 | 5–9 |
| Green | 5–7 | 10–12 |
| Gold | ≥ 8 | ≥ 13 |

The React info page says rolls use "a pair of six-sided dice", so 2d6 appears to be the current design. The color bands are UI hints only. The code has no target numbers or success/failure logic.

## Violence (React `info.js`; printed on page 2 of the print sheet, not shown in the app)

- **Unaware target:** attacker rolls Muscle + Creep vs target's Endure
- **Aware target:** attacker rolls Muscle vs target's Endure + React
- **Attack results** (margin of the attack roll):
  - **+2 or more for target:** no effect, and the target gets a free chance to retaliate.
  - **+1 for target:** deflected. Attacker React vs target React + Muscle for who moves next.
  - **Even:** grapple. Both roll Muscle to break it and move next.
  - **+1 attacker:** little damage. Attacker React + Muscle vs target React for who moves next.
  - **+2 attacker:** minor injury. Attacker React + Muscle vs target React + Endure.
  - **+3 attacker:** minor injury, and the target takes −1 on React + Endure vs attacker React + Muscle.
  - **+4 attacker:** major injury, with the same −1 roll for who moves next.
  - **+5 attacker:** major injury, and the target falls unconscious.
  - **+6 or more for attacker:** killed, unless the attacker intends otherwise.
- **Weapon classes:** 1 Simple (+1 Mus) · 2 Little Trigger (+1 Cre, add React to attack) · 3 Jabbing (+1 Mus, +1 Cre) · 4 Heavy (+2 Mus) · 5 Penetrating (+2 Mus, +2 Cre) · 6 Big Trigger (+2 Mus, add React to attack)

The intro paragraph's summary ("target rolls React + Endure…") states the rolls from the target's side. The bullet list states them from the attacker's side. They agree, but the wording could be unified.
