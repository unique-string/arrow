const types = [
    {
        name: 'Aloof',
        text: '+3 to Lie, +2 to Creep and Endure, +1 to Intimidate and Persuade, -1 to Investigate, Notice and Analyze, and -2 to React.',
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
            'a toothpick',
            'a bottle of vodka'
        ],
        money: 200
    },
    {
        name: 'Angry',
        text: 'You get +3 to Intimidate, +2 to React, +1 to Muscle and Lie, -1 to Analyze, and -2 to Notice. ',
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
            'a switchblade'
        ],
        money: 700
    },
    {
        name: 'Burly',
        text: '+3 to Muscle, +2 to Endure, +1 to Intimidate, and -2 to Creep.',
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
            'a leather coat',
            'brass knuckles',
            'two protein bars'
        ],
        money: 400
    },
    {
        name: 'Charming',
        text: '+3 to Persuade, +2 to Lie, +1 to Notice and Endure, -1 to Creep and -2 to Investigate.',
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
            'toothbrush and toothpaste',
            'comb or hairbrush',
            'soap',
            'a nail file'
        ],
        money: 1000
    },
    {
        name: 'Dorky',
        text: '+3 to Analyze, +2 to Investigate and Notice, +1 to Lie, -1 to Muscle and Intimidate, and -2 to Endure.',
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
            'a magnetic pocket chessboard',
            'two books'
        ],
        money: 500
    },
    {
        name: 'Nosy',
        text: '+3 to Investigate, +2 to Analyze, +1 to Notice and Creep,  -1 to Lie and React, and -2 to Persuade.',
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
            'a magnifying glass',
            'a listening device'
        ],
        money: 100
    },
    {
        name: 'Placid',
        text: 'You get +3 to Endure, +2 to Analyze, +1 to Investigate, Muscle and Persuade, -1 to React and Intimidate and -2 to Lie.',
        verbs: {
            investigate: 1,
            notice: 0,
            analyze: 2,
            muscle: 1,
            endure: 3,
            react: -2,
            creep: 0,
            intimidate: -1,
            persuade: 1,
            lie: -2
        },
        items: [
            'a meditation mat',
            'a walking stick',
            'a Ouija board'
        ],
        money: 300
    },
    {
        name: 'Sneaky',
        text: '+3 to Creep, +2 to React and Lie, +1 to Notice, -1 to Muscle and Endure, and -2 to Intimidate.',
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
            'a disguise',
            'a set of lockpicks'
        ],
        money: 800
    },
    {
        name: 'Sporty',
        text: '+3 to React, +2 to Muscle, +1 to Endure, Creep and Persuade, -1 to Notice and Lie, and -2 to Analyze.',
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
            'baseball and bat',
            'football and pads',
            'soccer ball and cleats',
            'hockey stick, puck, and pads',
            'basketball and sneakers',
            'lacrosse stick and ball',
            'curling broom and two stones',
            '80 lbs. of kettlebells',
            'a javelin',
            'a set of golf clubs',
            'a pair of boxing gloves and a jump rope'
        ],
        money: 900
    },
    {
        name: 'Witty',
        text: 'You get +3 to Notice, +1 to Investigate, Analyze, React, and Persuade, -1 to Intimidate, and -2 to Muscle.',
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
            'a Swiss army knife',
            'a deck of playing cards',
            'a bag of trail mix'
        ],
        money: 600
    }
]