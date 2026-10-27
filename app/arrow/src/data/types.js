
const types = [
  {
      name: 'Aloof',
      text: <div>
        <div>+3 to Lie</div>
        <div>+2 to Creep and Endure</div>
        <div>+1 to Intimidate and Persuade</div>
        <div>-1 to Investigate, Notice and Analyze</div>
        <div>-2 to React</div>
      </div>,
      verbs: {
        investigate: -1,
        notice: -1,
        analyze: -1,
        muscle: 0,
        endure: 2,
        react: -2,
        creep: 2,
        intimidate: 1,
        persuade: 1,
        lie: 3
      },
      items: [
        'sunglasses',
        'toothpick',
        'bottle of vodka',
        'two dollars'
      ],
      money: 200
  },
  {
      name: 'Angry',
      text: <div>
        <div>+3 to Intimidate</div>
        <div>+2 to React</div>
        <div>+1 to Muscle and Lie</div>
        <div>-1 to Analyze</div>
        <div>-2 to Notice</div>
      </div>,
      verbs: {
        investigate: 0,
        notice: -2,
        analyze: -1,
        muscle: 1,
        endure: 0,
        react: 2,
        creep: 0,
        intimidate: 3,
        persuade: 0,
        lie: 1
      },
      items: [
        'switchblade',
        'seven dollars'
      ],
      money: 700
  },
  {
      name: 'Burly',
      text: <div>
        <div>+3 to Muscle</div>
        <div>+2 to Endure</div>
        <div>+1 to Intimidate</div>
        <div>-2 to Creep</div>
      </div>,
      verbs: {
        investigate: 0,
        notice: 0,
        analyze: 0,
        muscle: 3,
        endure: 2,
        react: 0,
        creep: -2,
        intimidate: 1,
        persuade: 0,
        lie: 0
      },
      items: [
        'leather coat',
        'brass knuckles',
        'two protein bars',
        'four dollars'
      ],
      money: 400
  },
  {
      name: 'Charming',
      text: <div>
        <div>+3 to Persuade</div>
        <div>+2 to Lie</div>
        <div>+1 to Notice and Endure</div>
        <div>-1 to Creep</div>
        <div>-2 to Investigate</div>
      </div>,
      verbs: {
        investigate: -2,
        notice: 1,
        analyze: 0,
        muscle: 0,
        endure: 1,
        react: 0,
        creep: -1,
        intimidate: 0,
        persuade: 3,
        lie: 2
      },
      items: [
        'toothbrush',
        'toothpaste',
        'comb or hairbrush',
        'soap',
        'nail file',
        'ten dollars'
      ],
      money: 1000
  },
  {
      name: 'Dorky',
      text: <div>
        <div>+3 to Analyze</div>
        <div>+2 to Investigate and Notice</div>
        <div>+1 to Lie</div>
        <div>-1 to Muscle and Intimidate</div>
        <div>-2 to Endure</div>
      </div>,
      verbs: {
        investigate: 2,
        notice: 2,
        analyze: 3,
        muscle: -1,
        endure: -2,
        react: 0,
        creep: 0,
        intimidate: -1,
        persuade: 0,
        lie: 1
      },
      items: [
        'pocket calculator',
        'two books',
        'five dollars'
      ],
      money: 500
  },
  {
      name: 'Nosy',
      text: <div>
        <div>+3 to Investigate</div>
        <div>+2 to Analyze</div>
        <div>+1 to Notice and Creep</div>
        <div>-1 to Lie and React</div>
        <div>-2 to Persuade</div>
      </div>,
      verbs: {
        investigate: 3,
        notice: 1,
        analyze: 2,
        muscle: 0,
        endure: 0,
        react: -1,
        creep: 1,
        intimidate: 0,
        persuade: -2,
        lie: -1
      },
      items: [
        'magnifying glass',
        'listening device',
        'one dollar'
      ],
      money: 100
  },
  {
      name: 'Placid',
      text: <div>
        <div>+3 to Endure</div>
        <div>+2 to Analyze</div>
        <div>+1 to Investigate, Muscle and Persuade</div>
        <div>-1 to React and Intimidate</div>
        <div>-2 to Lie</div>
      </div>,
      verbs: {
        investigate: 1,
        notice: 0,
        analyze: 2,
        muscle: 1,
        endure: 3,
        react: -1,
        creep: 0,
        intimidate: -1,
        persuade: 1,
        lie: -2
      },
      items: [
        'meditation mat',
        'walking stick',
        'Ouija board',
        'three dollars'
      ],
      money: 300
  },
  {
      name: 'Sneaky',
      text: <div>
        <div>+3 to Creep</div>
        <div>+2 to React and Lie</div>
        <div>+1 to Notice</div>
        <div>-1 to Muscle and Endure</div>
        <div>-2 to Intimidate</div>
      </div>,
      verbs: {
        investigate: 0,
        notice: 1,
        analyze: 0,
        muscle: -1,
        endure: -1,
        react: 2,
        creep: 3,
        intimidate: -2,
        persuade: 0,
        lie: 2
      },
      items: [
        'disguise',
        'lockpick set',
        'eight dollars'
      ],
      money: 800
  },
  {
      name: 'Sporty',
      text: <div>
        <div>+3 to React</div>
        <div>+2 to Muscle</div>
        <div>+1 to Endure, Creep and Persuade</div>
        <div>-1 to Notice and Lie</div>
        <div>-2 to Analyze</div>
      </div>,
      verbs: {
        investigate: 0,
        notice: -1,
        analyze: -2,
        muscle: 2,
        endure: 1,
        react: 3,
        creep: 1,
        intimidate: 0,
        persuade: 1,
        lie: -1
      },
      items: [
        'sports equipment*',
        'nine dollars'
      ],
      money: 900
  },
  {
      name: 'Witty',
      text: <div>
        <div>+3 to Notice</div>
        <div>+1 to Investigate, Analyze, React, and Persuade</div>
        <div>-1 to Intimidate</div>
        <div>-2 to Muscle</div>
      </div>,
      verbs: {
        investigate: 1,
        notice: 3,
        analyze: 1,
        muscle: -2,
        endure: 0,
        react: 1,
        creep: 0,
        intimidate: -1,
        persuade: 1,
        lie: 0
      },
      items: [
        'Swiss army knife',
        'deck of cards',
        'bag of trail mix',
        'six dollars'
      ],
      money: 600
  }
]

export default types