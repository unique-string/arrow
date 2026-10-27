
const types = [
    {
        name: 'Aloof',
        text: '+3 to Lie<br> +2 to Creep and Endure<br>+1 to Intimidate and Persuade<br>-1 to Investigate, Notice and Analyze<br>-2 to React',
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
            ' sunglasses',
            ' toothpick',
            ' bottle of vodka',
            ' two dollars'
        ],
        money: 200
    },
    {
        name: 'Angry',
        text: '+3 to Intimidate<br>+2 to React<br>+1 to Muscle and Lie<br>-1 to Analyze<br>-2 to Notice',
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
            ' switchblade',
            ' seven dollars'
        ],
        money: 700
    },
    {
        name: 'Burly',
        text: '+3 to Muscle<br>+2 to Endure<br>+1 to Intimidate<br>-2 to Creep',
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
            ' leather coat',
            ' brass knuckles',
            ' two protein bars',
            ' four dollars'
        ],
        money: 400
    },
    {
        name: 'Charming',
        text: '+3 to Persuade<br>+2 to Lie<br>+1 to Notice and Endure<br>-1 to Creep<br>-2 to Investigate',
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
            ' toothbrush',
            ' toothpaste',
            ' comb or hairbrush',
            ' soap',
            ' nail file',
            ' ten dollars'
        ],
        money: 1000
    },
    {
        name: 'Dorky',
        text: '+3 to Analyze<br>+2 to Investigate and Notice<br>+1 to Lie<br>-1 to Muscle and Intimidate<br>-2 to Endure',
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
            ' pocket calculator',
            ' two books',
            ' five dollars'
        ],
        money: 500
    },
    {
        name: 'Nosy',
        text: '+3 to Investigate<br>+2 to Analyze<br>+1 to Notice and Creep<br>-1 to Lie and React<br>-2 to Persuade',
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
            ' magnifying glass',
            ' listening device',
            ' one dollar'
        ],
        money: 100
    },
    {
        name: 'Placid',
        text: '+3 to Endure<br>+2 to Analyze<br>+1 to Investigate, Muscle and Persuade<br>-1 to React and Intimidate<br>-2 to Lie',
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
            ' meditation mat',
            ' walking stick',
            ' Ouija board',
            ' three dollars'
        ],
        money: 300
    },
    {
        name: 'Sneaky',
        text: '+3 to Creep<br>+2 to React and Lie<br>+1 to Notice<br>-1 to Muscle and Endure<br>-2 to Intimidate',
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
            ' disguise',
            ' lockpick set',
            ' eight dollars'
        ],
        money: 800
    },
    {
        name: 'Sporty',
        text: '+3 to React<br>+2 to Muscle<br>+1 to Endure, Creep and Persuade<br>-1 to Notice and Lie<br>-2 to Analyze',
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
            ' sports equipment*',
            ' nine dollars'
        ],
        money: 900
    },
    {
        name: 'Witty',
        text: '+3 to Notice<br>+1 to Investigate, Analyze, React, and Persuade<br>-1 to Intimidate<br>-2 to Muscle',
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
            ' Swiss army knife',
            ' deck of cards',
            ' bag of trail mix',
            ' six dollars'
        ],
        money: 600
    }
]

const jobs = [
    {
        name: 'Actuary',
        text: 'You have a canny mind for statistics and probability. You get an extra +1 to skill and action checks used to determine risk or likelihood of mortality.',
        shorthand: '+1 to skill and action checks used to determine risk or likelihood of mortality',
        items: [
            ' booklet of actuarial tables',
            ' stubby pencil',
            ' reading glasses'
        ]
    },
    {
        name: 'Bartender',
        text: 'You have an intimate knowledge of alcohol and a firm hand with drunks. You gain +1 to skill and action checks used to interact with intoxicated people or determine the identity or composition of beverages.',
        shorthand: '+1 to skill and action checks used to interact with intoxicated people or determine the identity or composition of beverages.',
        items: [
            ' paring knife',
            ' church key',
            ' four 1.5oz bottles of liquor',
            ' cocktail shaker'
        ]
    },
    {
        name: 'Burglar',
        text: 'You have a checkered past, or a checkered present. You gain +1 to skill and action checks made to perform acts of property crime or case potential targets.',
        shorthand: '+1 to skill and action checks made to perform acts of property crime or case potential targets.',
        items: [
            ' blackjack',
            ' ski mask',
            ' false-bottom suitcase'
        ]
    },
    {
        name: 'Clairvoyant',
        text: 'You make your living tapping into mystical forces to determine the unseen. Once every four game-hours, you may make an action check to consult your divining tools and look for guidance into an extant situation.',
        shorthand: 'Once every four game-hours, you may make an action check to consult your divining tools and look for guidance into an extant situation.',
        items: [
            ' divining tools'
        ]
    },
    {
        name: 'Coach',
        text: 'You know how to organize and motivate a team. You get an additional +1 to skill and action checks used to motivate other people or determine potential strategies.',
        shorthand: '+1 to skill and action checks used to motivate other people or determine potential strategies.',
        items: [
            ' athletic tape',
            ' stopwatch',
            ' whistle'
        ]
    },
    {
        name: 'Financier',
        text: 'You understand how money moves and behaves. You get an extra +1 to skill and action checks used to interact with people of wealth and status and +1 to Persuade when large sums of money are involved.',
        shorthand: '+1 to skill and action checks used to interact with people of wealth and status<br>+1 to Persuade when large sums of money are involved.',
        items: [
            ' Cross pen (gold)',
            ' forty dollars'
        ],
        money: 4000
    },
    {
        name: 'Nurse',
        text: 'You have knowledge of wounds and illnesses and how to treat them. You get an additional +1 to skill and action checks used to ascertain or address bodily conditions.',
        shorthand: '+1 to skill and action checks used to ascertain or address bodily conditions.',
        items: [
            ' stethoscope',
            ' pain pills',
            ' first aid kit'
        ]
    },
    {
        name: 'Assistant',
        text: 'You are very helpful to have around. All your positive skills get -1, but you may assist nearby characters by adding +1 to their checks for which your modifier is 0, +1 or +2.',
        shorthand: 'You may assist nearby characters by adding +1 to their checks for which your modifier is 0, +1 or +2.',
        items: [
            ' mechanical pencil',
            ' notepad',
            ' protein bar'
        ]
    },
    {
        name: 'Roughneck',
        text: 'You\'ve spent most of your life lifting and hauling things that other people can\'t. You get an additional +1 to skill and action checks used to manipulate heavy objects.',
        shorthand: '+1 to skill and action checks used to manipulate heavy objects.',
        items: [
            ' work gloves',
            ' 30 feet of rope'
        ]
    },
    {
        name: 'Scientist',
        text: 'You\'re a professional in one of the hard sciences (chemistry, physics, geology, biology, etc.). You get an additional +1 to skill checks used to identify or analyze matters related to your field.',
        shorthand: '+1 to skill and action checks used to identify or analyze matters related to your field.',
        items: [
            ' portable laboratory'
        ]
    },
    {
        name: 'Teacher',
        text: 'You have loads of experience with classroom management. You get an additional +1 to skill checks used to explain concepts you understand or to restore calm in a disorderly group.',
        shorthand: '+1 to skill and action checks used to explain concepts you understand or to restore calm in a disorderly group.',
        items: [
            ' No. 2 pencil',
            ' tin of instant coffee',
            ' apple'
        ]
    },
    {
        name: 'Zookeeper',
        text: 'You have a way with beasts. You get an additional +1 to skill checks used to interact with animals or understand their behavior and +1 to Endure when facing physical harm.',
        shorthand: '+1 to skill and action checks used to interact with animals or determine animal involvement in situations<br>+1 to Endure when facing physical harm.',
        items: [
            ' binoculars',
            ' treats',
            ' telescoping shock baton'
        ]
    }
]

const reasons = [
    {
        name: 'Sense of Honor',
        text: 'Wrongs must be set right. You know the murder was committed by someone on this train, and you will stop at nothing until the one responsible is brought to justice.<br><br>You get +1 to Notice and React when crimes are being committed.',
        shorthand: '+1 to Notice and React when crimes are being committed.'
    },
    {
        name: 'Shady Dealings',
        text: 'You do not want the police sniffing around in some general investigation.  You may be carrying contraband—drugs, weapons, secrets, etc.—or have a warrant out for your arrest.<br><br>You get +1 to Creep and Lie when authority figures are involved.',
        shorthand: '+1 to Creep and Lie when authority figures are involved.'
    },
    {
        name: 'Ego Warrior',
        text: 'Looking like a hero would feel amazing. You want to act in a way that makes people adore you, now and in the future, for your feats of greatness in this dark hour.<br><br>You get +1 to Muscle and Endure when people are watching you.',
        shorthand: '+1 to Muscle and Endure when people are watching you.'
    },
    {
        name: 'Boredom Warrior',
        text: 'Solving a murder seems like a way to pass the time. Maybe you’re being forced to miss your stop and want a distraction. Maybe you’re just glad something\'s happening.<br><br>You get +1 to Notice and Investigate when you’re looking at something no one else is looking at.',
        shorthand: '+1 to Notice and Investigate when you’re looking at something no one else is looking at.'
    },
    {
        name: 'Puzzle Lover',
        text: 'You just can’t resist a knotty problem to solve. This murder is one of the most interesting puzzles you’ve seen in weeks, maybe months.<br><br>You get +1 to Investigate and Analyze when trying to interpret symbols or make logical connections between one thing and another.',
        shorthand: '+1 to Investigate and Analyze when trying to interpret symbols or make logical connections between one thing and another.'
    },
    {
        name: 'I Have My Reasons',
        text: 'All this means more to you than meets the eye. Maybe you took a personal liking to the victim before they met their end, and maybe this situation reminds you of something that hits too close to home.<br><br>You get +1 to Intimidate and React when dealing with physical harm.',
        shorthand: '+1 to Intimidate and React when dealing with physical harm.'
    },
]

const sportsArray = [
    {
        name: 'Baseball',
        items: [
            ' baseball',
            ' Louisville Slugger'
        ]
    },
    {
        name: 'Football',
        items: [
            ' football pads',
            ' cleats'
        ]

    },
    {
        name: 'Soccer',
        items: [
            ' soccer ball',
            ' cleats'
        ]

    },
    {
        name: 'Hockey',
        items: [
            ' hockey pads',
            ' hockey stick',
            ' hockey puck'
        ]  
    },
    {
        name: 'Basketball',
        items: [
            ' basketball',
            ' sneakers'
        ]

    },
    {
        name: 'Lacrosse',
        items: [
            ' lacrosse stick',
            ' lacrosse ball'
        ]
    },
    {
        name: 'Curling',
        items: [
            ' curling broom',
            ' two curling stones'
        ]
    },
    {
      name: 'Martial Arts',
      items: [
          ' +1 to Muscle and React in violent situations'
      ]  
    },
    {
        name: 'Track & Field',
        items: [
            ' cleats',
            ' javelin'
        ]

    },
    {
        name: 'Golf',
        items: [
            ' set of golf clubs',
            ' six golf balls'
        ]
    },
    {
        name: 'Boxing',
        items: [
            ' boxing gloves',
            ' jump rope (10 ft.)'
        ]
    },
    {
        name: 'Ballet',
        items: [
            ' bobby pins',
            ' leotard',
            ' stage makeup kit'            
        ]
    }
]

let displayJobs = []
function shuffleJobs() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (displayJobs.length < jobs.length) {
        const random = jobs[Math.floor(Math.random() * jobs.length)]
        if (!displayJobs.includes(random)) {
            displayJobs.push(random)
        }
    }
}

let displayTypes = []
function shuffleTypes() {
    while (displayTypes.length < types.length) {
        const random = types[Math.floor(Math.random() * types.length)]
        if (!displayTypes.includes(random)) {
            displayTypes.push(random)
        }
    }
}

let displayReasons = []
function shuffleReasons() {
    while (displayReasons.length < reasons.length) {
        const random = reasons[Math.floor(Math.random() * reasons.length)]
        if (!displayReasons.includes(random)) {
            displayReasons.push(random)
        }
    }
}

let displaySports = []
function shuffleSports() {
    while (displaySports.length < 12) {
        const random = sportsArray[Math.floor(Math.random() * sportsArray.length)]
        if (!displaySports.includes(random)) {
            displaySports.push(random)
        }
    }
}

// let questionNumber = 1 //holds the current question number
// let playerScore = 0  //holds the player score
// let wrongAttempt = 0 //amount of wrong answers picked by player
// let indexNumber = 0 //will be used in displaying next question

const characterDetails = {}
let pageNumber = 0

function welcome() {
    document.getElementById("page-text")
}

function getName() {
    document.getElementById("top-line").innerHTML = `<h1>Death on the Arrow</h1><br>
        <h2><br>You\'re a traveler on the Prairie Arrow, an express passenger train across a stretch of the American Midwest between Chicago and Denver.<br><br>It's October 8, 1974, a Monday. At 4:41pm, just after the train reaches open country, someone is going to die.</h2>`
    document.getElementById("page-text").innerHTML = `
    <p style="margin: 2rem;">
    <label for="charname" style="font-size:1.2rem;">What's your name?</label>
    <input type="text" id="charname" name="charname">
    </p>
    `
    document.getElementById("next-button").innerHTML = '<button onclick="logName()">Continue</button>'
}


function showTypes() {
    shuffleTypes()
    document.getElementById("top-line").innerHTML = `<h3>How would you describe yourself?</h3>`
//         <h3>Verbs</h3><br>
//         <span>You will make challenge rolls at key points in the journey, to determine the outcomes of events and actions in the story.Most challenge rolls line up with a set of ten verbs that players use to interact with the world. Here’s a list of those verbs and a brief description of how they might influence circumstances that the players encounter:<br><br>
//         <ul>
//         <li><strong>Investigate.</strong> The ability to find meaningful information when searching for it.</li>
//         <li><strong>Notice.</strong> The ability to passively detect certain details of an environment.</li>
//         <li><strong>Analyze.</strong> The ability to look into an object or situation and better understand it.</li>
//         <li><strong>Muscle.</strong> The ability to effectively apply physical strength.</li>
//         <li><strong>Endure.</strong> The ability to withstand damage to the body and mind.</li>
//         <li><strong>Creep.</strong> The ability to execute movement and actions without being noticed.</li>
//         <li><strong>React.</strong> The ability to respond to sudden changes in circumstances.</li>
//         <li><strong>Persuade.</strong> The ability to convince others to believe things you believe.</li>
//         <li><strong>Intimidate.</strong> The ability to assert dominance in social situations.</li>
//         <li><strong>Lie.</strong> The ability to present false fronts and bend the truth. </li>
//         </ul></span><br>
//         <span>The personality you choose for your character will affect your skill in those ten areas. The options are explained below.</span>
//         <h3>How would you describe yourself?</h3>
// `
    document.getElementById("page-text").innerHTML = `
                        <p>
                            <input type="radio" id="option-one" name="option" class="radio" value="text" />
                            <label for="option-one" class="option" id="option-one-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-two" name="option" class="radio" value="text" />
                            <label for="option-two" class="option" id="option-two-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-three" name="option" class="radio" value="text" />
                            <label for="option-three" class="option" id="option-three-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-four" name="option" class="radio" value="text" />
                            <label for="option-four" class="option" id="option-four-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-five" name="option" class="radio" value="text" />
                            <label for="option-five" class="option" id="option-five-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-six" name="option" class="radio" value="text" />
                            <label for="option-six" class="option" id="option-six-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-seven" name="option" class="radio" value="text" />
                            <label for="option-seven" class="option" id="option-seven-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-eight" name="option" class="radio" value="text" />
                            <label for="option-eight" class="option" id="option-eight-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-nine" name="option" class="radio" value="text" />
                            <label for="option-nine" class="option" id="option-nine-label"></label>
                        </p>
                        <p>
                            <input type="radio" id="option-ten" name="option" class="radio" value="text" />
                            <label for="option-ten" class="option" id="option-ten-label"></label>
                        </p>`
    document.getElementById("option-one-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[0].name + '</h2><br>' + displayTypes[0].text + '<br><br>Inventory items:'+ displayTypes[0].items;
    document.getElementById("option-two-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[1].name + '</h2><br>' + displayTypes[1].text + '<br><br>Inventory items:'+ displayTypes[1].items;
    document.getElementById("option-three-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[2].name + '</h2><br>' + displayTypes[2].text + '<br><br>Inventory items:'+ displayTypes[2].items;
    document.getElementById("option-four-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[3].name + '</h2><br>' + displayTypes[3].text + '<br><br>Inventory items:'+ displayTypes[3].items;
    document.getElementById("option-five-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[4].name + '</h2><br>' + displayTypes[4].text + '<br><br>Inventory items:'+ displayTypes[4].items;
    document.getElementById("option-six-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[5].name + '</h2><br>' + displayTypes[5].text + '<br><br>Inventory items:'+ displayTypes[5].items;
    document.getElementById("option-seven-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[6].name + '</h2><br>' + displayTypes[6].text + '<br><br>Inventory items:'+ displayTypes[6].items;
    document.getElementById("option-eight-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[7].name + '</h2><br>' + displayTypes[7].text + '<br><br>Inventory items:'+ displayTypes[7].items;
    document.getElementById("option-nine-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[8].name + '</h2><br>' + displayTypes[8].text + '<br><br>Inventory items:'+ displayTypes[8].items;
    document.getElementById("option-ten-label").innerHTML = '<h2 style="text-align:center !important">' + displayTypes[9].name + '</h2><br>' + displayTypes[9].text + '<br><br>Inventory items:'+ displayTypes[9].items;

    document.getElementById("next-button").innerHTML = '<button onclick="logType()">Continue</button>'
    window.scroll(0, 0)
}


function showJobs() {
    shuffleJobs()
    document.getElementById("top-line").innerHTML = '<h3>What do you do?</h3>'
    document.getElementById("page-text").innerHTML = `
    <p>
        <input type="radio" id="option-one" name="option" class="radio" value="text" />
        <label for="option-one" class="option" id="option-one-label"></label>
    </p>
    <p>
        <input type="radio" id="option-two" name="option" class="radio" value="text" />
        <label for="option-two" class="option" id="option-two-label"></label>
    </p>
    <p>
        <input type="radio" id="option-three" name="option" class="radio" value="text" />
        <label for="option-three" class="option" id="option-three-label"></label>
    </p>
    <p>
        <input type="radio" id="option-four" name="option" class="radio" value="text" />
        <label for="option-four" class="option" id="option-four-label"></label>
    </p>
    <p>
        <input type="radio" id="option-five" name="option" class="radio" value="text" />
        <label for="option-five" class="option" id="option-five-label"></label>
    </p>
    <p>
        <input type="radio" id="option-six" name="option" class="radio" value="text" />
        <label for="option-six" class="option" id="option-six-label"></label>
    </p>
    <p>
        <input type="radio" id="option-seven" name="option" class="radio" value="text" />
        <label for="option-seven" class="option" id="option-seven-label"></label>
    </p>
    <p>
        <input type="radio" id="option-eight" name="option" class="radio" value="text" />
        <label for="option-eight" class="option" id="option-eight-label"></label>
    </p>
    <p>
        <input type="radio" id="option-nine" name="option" class="radio" value="text" />
        <label for="option-nine" class="option" id="option-nine-label"></label>
    </p>
    <p>
        <input type="radio" id="option-ten" name="option" class="radio" value="text" />
        <label for="option-ten" class="option" id="option-ten-label"></label>
    </p>
    <p>
        <input type="radio" id="option-eleven" name="option" class="radio" value="text" />
        <label for="option-eleven" class="option" id="option-eleven-label"></label>
    </p>
    <p>
        <input type="radio" id="option-twelve" name="option" class="radio" value="text" />
        <label for="option-twelve" class="option" id="option-twelve-label"></label>
    </p>`
    document.getElementById("option-one-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[0].name + '</h2><br>' + displayJobs[0].text + '<br><br>Inventory items:'+ displayJobs[0].items;
    document.getElementById("option-two-label").innerHTML ='<h2 style="text-align:center !important">' + displayJobs[1].name + '</h2><br>' + displayJobs[1].text + '<br><br>Inventory items:'+ displayJobs[1].items;
    document.getElementById("option-three-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[2].name + '</h2><br>' + displayJobs[2].text + '<br><br>Inventory items:'+ displayJobs[2].items;
    document.getElementById("option-four-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[3].name + '</h2><br>' + displayJobs[3].text + '<br><br>Inventory items:'+ displayJobs[3].items;
    document.getElementById("option-five-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[4].name + '</h2><br>' + displayJobs[4].text + '<br><br>Inventory items:'+ displayJobs[4].items;
    document.getElementById("option-six-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[5].name + '</h2><br>' + displayJobs[5].text + '<br><br>Inventory items:'+ displayJobs[5].items;
    document.getElementById("option-seven-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[6].name + '</h2><br>' + displayJobs[6].text + '<br><br>Inventory items:'+ displayJobs[6].items;
    document.getElementById("option-eight-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[7].name + '</h2><br>' + displayJobs[7].text + '<br><br>Inventory items:'+ displayJobs[7].items;
    document.getElementById("option-nine-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[8].name + '</h2><br>' + displayJobs[8].text + '<br><br>Inventory items:'+ displayJobs[8].items;
    document.getElementById("option-ten-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[9].name + '</h2><br>' + displayJobs[9].text + '<br><br>Inventory items:'+ displayJobs[9].items;
    document.getElementById("option-eleven-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[10].name + '</h2><br>' + displayJobs[10].text + '<br><br>Inventory items:'+ displayJobs[10].items;
    document.getElementById("option-twelve-label").innerHTML = '<h2 style="text-align:center !important">' + displayJobs[11].name + '</h2><br>' + displayJobs[11].text + '<br><br>Inventory items:'+ displayJobs[11].items;

    document.getElementById("next-button").innerHTML = '<button onclick="logJob()">Continue</button>'
    window.scroll(0, 0)
}


function showReasons() {
    shuffleReasons()
    document.getElementById("top-line").innerHTML = '<h1>What moves you?</h1>'    
    document.getElementById("page-text").innerHTML = `
    <p>
        <input type="radio" id="option-one" name="option" class="radio" value="text" />
        <label for="option-one" class="option" id="option-one-label"></label>
    </p>
    <p>
        <input type="radio" id="option-two" name="option" class="radio" value="text" />
        <label for="option-two" class="option" id="option-two-label"></label>
    </p>
    <p>
        <input type="radio" id="option-three" name="option" class="radio" value="text" />
        <label for="option-three" class="option" id="option-three-label"></label>
    </p>
    <p>
        <input type="radio" id="option-four" name="option" class="radio" value="text" />
        <label for="option-four" class="option" id="option-four-label"></label>
    </p>
    <p>
        <input type="radio" id="option-five" name="option" class="radio" value="text" />
        <label for="option-five" class="option" id="option-five-label"></label>
    </p>
    <p>
        <input type="radio" id="option-six" name="option" class="radio" value="text" />
        <label for="option-six" class="option" id="option-six-label"></label>
    </p>`
    document.getElementById("option-one-label").innerHTML = '<h2 style="text-align:center !important">' + displayReasons[0].name + '</h2><br>' + displayReasons[0].text;
    document.getElementById("option-two-label").innerHTML ='<h2 style="text-align:center !important">' + displayReasons[1].name + '</h2><br>' + displayReasons[1].text;
    document.getElementById("option-three-label").innerHTML = '<h2 style="text-align:center !important">' + displayReasons[2].name + '</h2><br>' + displayReasons[2].text;
    document.getElementById("option-four-label").innerHTML = '<h2 style="text-align:center !important">' + displayReasons[3].name + '</h2><br>' + displayReasons[3].text;
    document.getElementById("option-five-label").innerHTML = '<h2 style="text-align:center !important">' + displayReasons[4].name + '</h2><br>' + displayReasons[4].text;
    document.getElementById("option-six-label").innerHTML = '<h2 style="text-align:center !important">' + displayReasons[5].name + '</h2><br>' + displayReasons[5].text;

    document.getElementById("next-button").innerHTML = '<button onclick="logReason()">Continue</button>'
    window.scroll(0, 0)
}


let equipment = ''
function showSports() {
    shuffleSports()
    document.getElementById("top-line").innerHTML = '<h3>What\'s your sport?</h3>'
    let sports = displaySports.map((sport, index) => {
      return `<p style="width: 15%; height: 94px;"><input type="radio" id="option-${index}" name="option" class="radio" value="text" /><label style="text-align: center;" for="option-${index}" class="option" id="option-${index}-label"></label></p>`
    })
    console.log(sports)
    const sportOptions = sports.join('')
    document.getElementById("page-text").innerHTML = sportOptions
    displaySports.map((sport, index) => {
      document.getElementById(`option-${index}-label`).innerHTML = `<h3>${sport.name}</h3><br />${sport.items}`
    })
    // <p style="width: 15%;">
    //     <input type="radio" id="option-one" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-one" class="option" id="option-one-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[0].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-two" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-two" class="option" id="option-two-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[1].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-three" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-three" class="option" id="option-three-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[2].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-four" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-four" class="option" id="option-four-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[3].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-five" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-five" class="option" id="option-five-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[4].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-six" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-six" class="option" id="option-six-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[5].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-seven" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-seven" class="option" id="option-seven-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[6].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-eight" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-eight" class="option" id="option-eight-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[7].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-nine" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-nine" class="option" id="option-nine-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[8].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-ten" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-ten" class="option" id="option-ten-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[9].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-eleven" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-eleven" class="option" id="option-eleven-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[10].name}</label>
    // </p>
    // <p style="width: 15%;">
    //     <input type="radio" id="option-twelve" name="option" class="radio" value="text" />
    //     <label style="text-align: center;" for="option-twelve" class="option" id="option-twelve-label" onmouseover="showEquipment(this)" onmouseout="blankEquipment()">${displaySports[11].name}</label>
    // </p>
    // <div class="sports-equipment-container" id="equipment">Equipment: ${equipment}</div>`
    document.getElementById("next-button").innerHTML = '<button onclick="logSport()">Continue</button>'
}

    // document.getElementById("option-one-label").innerHTML = `<h2 style="text-align:center !important">here is a sports` + displaySports[0].name + `</h2>`;
    // document.getElementById("option-two-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[1].name + '</h2>';
    // document.getElementById("option-three-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[2].name + '</h2>';
    // document.getElementById("option-four-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[3].name + '</h2>';
    // document.getElementById("option-five-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[4].name + '</h2>';
    // document.getElementById("option-six-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[5].name + '</h2>';
    // document.getElementById("option-seven-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[6].name + '</h2>';
    // document.getElementById("option-eight-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[7].name + '</h2>';
    // document.getElementById("option-nine-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[8].name + '</h2>';
    // document.getElementById("option-ten-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[9].name + '</h2>';
    // document.getElementById("option-eleven-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[10].name + '</h2>';
    // document.getElementById("option-twelve-label").innerHTML = '<h2 style="text-align:center !important">' + displaySports[11].name + '</h2>';


function showDetails() {

    // adds a leading '+' to positive modifier values
    let modifiers = {...characterDetails.verbs}
    for (const verb in modifiers){
        if (modifiers[verb] > 0){
            modifiers[verb] = `+${modifiers[verb]}`
        }
}
    document.getElementById("top-line").innerHTML = `<h3>` + characterDetails.name + `</h3><br><h4>` + characterDetails.type + ` ` + characterDetails.job + `, ` + characterDetails.reason + `</h4>`
    document.getElementById("details-container").style.display = "flex"
    document.getElementById("blank-box-left").style.display = "flex"
    document.getElementById("blank-box-right").style.display = "flex"

    document.getElementById("money-box").innerHTML = `
        <div class="money"><p>$` + (characterDetails.money / 100).toFixed(2) + `</p>
            <div id="money-changer"><input type="number" id="change-money" name="change-money">
                <span><button name="money-plus" class="money-buttons" value="+" onclick="moneyGoesUp()">+</button><button name="money-minus" class="money-buttons" value="-" onclick="moneyGoesDown()">-</button></span>
            </div>
        </div>`
    document.getElementById("modifier-table").innerHTML = `
        <table>
            <tbody>
                <tr>
                    <th>
                        <span>
                            <input type="radio" id="investigate" name="verb" class="radio" value="text" />
                            <label for="investigate" class="verb" id="investigate">Investigate</label>
                        </span>
                    </th>
                <th>` + modifiers.investigate + `</th>
                </tr>
                <tr>
                    <th>                        
                        <span>
                            <input type="radio" id="notice" name="verb" class="radio" value="text" />
                            <label for="notice" class="verb" id="notice">Notice</label>
                        </span>
                        </th>
                    <th>` + modifiers.notice + `</th>
                </tr>   
                <tr>
                    <th>
                        <span>
                            <input type="radio" id="analyze" name="verb" class="radio" value="text" />
                            <label for="analyze" class="verb" id="analyze">Analyze</label>
                        </span>
                    </th>
                    <th>` + modifiers.analyze + `</th> 
                </tr>   
                <tr>  
                    <th>                        
                        <span>
                            <input type="radio" id="muscle" name="verb" class="radio" value="text" />
                            <label for="muscle" class="verb" id="muscle">Muscle</label>
                        </span>
                    </th>
                    <th>` + modifiers.muscle + `</th>     
                </tr>   
                <tr>  
                    <th>                        
                        <span>
                            <input type="radio" id="endure" name="verb" class="radio" value="text" />
                            <label for="endure" class="verb" id="endure">Endure</label>
                        </span>
                    </th>
                    <th>` + modifiers.endure + `</th>   
                </tr>   
                <tr>
                    <th>                        
                        <span>
                            <input type="radio" id="react" name="verb" class="radio" value="text" />
                            <label for="react" class="verb" id="react">React</label>
                        </span>
                    </th>   
                    <th>` + modifiers.react + `</th>
                </tr>   
                <tr>
                    <th>
                        <span>
                            <input type="radio" id="creep" name="verb" class="radio" value="text" />
                            <label for="creep" class="verb" id="creep">Creep</label>
                        </span>
                    </th>   
                    <th>` + modifiers.creep + `</th>
                </tr>   
                <tr>
                    <th>
                        <span>
                            <input type="radio" id="intimidate" name="verb" class="radio" value="text" />
                            <label for="intimidate" class="verb" id="intimidate">Intimidate</label>
                        </span>
                    </th>   
                    <th>` + modifiers.intimidate + `</th>
                </tr>   
                <tr>
                    <th> 
                        <span>
                            <input type="radio" id="persuade" name="verb" class="radio" value="text" />
                            <label for="persuade" class="verb" id="persuade">Persuade</label>
                        </span>
                    </th>   
                    <th>` + modifiers.persuade + `</th>
                </tr>   
                <tr>
                    <th>
                        <span>
                            <input type="radio" id="lie" name="verb" class="radio" value="text" />
                            <label for="lie" class="verb" id="lie">Lie</label>
                        </span>
                    </th>
                    <th>` + modifiers.lie + `</th>
                </tr>   
                </tr>
            </tbody>
        </table>`
        document.getElementById("bonus-container").innerHTML = `
            <span>` + characterDetails.jobText + `<br>` + characterDetails.reasonText + `</span>`
        // <div class="inventory">
        //     <span><strong>Inventory:</strong></span>
        //     <span><br>` + characterDetails.items + `</span>
        // </div>

        document.getElementById("exploded-roll").innerHTML = `
            <div><span>0</span> &nbsp;&nbsp; + &nbsp;&nbsp; 0 </div>
            `
        document.getElementById("page-text").innerHTML = `<span></span>`
        document.getElementById("next-button").innerHTML = '<button onclick="showInventory()">Inventory</button>'
        document.getElementById("map-button").innerHTML = '<button onclick="showMap()">Map</button>'
        document.getElementById("map-button").style.display = "inline"
}

function rollModified() {
    const verbsList = document.getElementsByName("verb");
    let goAhead = 0
    verbsList.forEach((verb) => {
        if (verb.checked){
            goAhead++
        }
    })
    if (goAhead){
        let verb
        let operator
        verbsList.forEach((entry) => {
            if (entry.checked) {
                verb = entry.id
            }
        })
        const modifierName = verb.charAt(0).toUpperCase() + verb.slice(1)
        const modifier = characterDetails.verbs[verb]
        const die = Math.ceil(Math.random() * 6)
        const modifiedRoll = die + modifier
        const displayModifier = Math.abs(modifier)
        modifier < 0 ? operator = '-' : operator = '+'
        let spanClass = 'roll-box-span'

        if (modifiedRoll <= 2){
            document.getElementById("roll-box").style.color = "red"
        } else if (modifiedRoll <= 4){
            document.getElementById("roll-box").style.color = "black"
        } else if (modifiedRoll <= 7){
            document.getElementById("roll-box").style.color = "green"
        } else if (modifiedRoll > 7){
            document.getElementById("roll-box").style.color = ""
            spanClass = 'roll-box-gold'
        }

        document.getElementById("roll-box").innerHTML = `
            <span class="${spanClass}" id="${spanClass}">${modifiedRoll}</span>`
        document.getElementById("exploded-roll").innerHTML = `
            <div><span>${die}</span> &nbsp;&nbsp;${operator}&nbsp;&nbsp;${displayModifier}</div>
            `
        document.getElementById("modifier-name").innerHTML = `<div>${modifierName}</div>`
        console.log(modifier)
        console.log(characterDetails.verbs)
            unCheckVerbs()
        } else {
            return
        }
}

function logName() {
    const nameGet = document.getElementsByName("charname")
    if (nameGet[0].value) {
        characterDetails.name = nameGet[0].value
        showTypes()
    } else {
        document.getElementById('option-modal').innerHTML = `
        <div class="modal-content-container">
        <h1>You didn't enter a name!<br><br>If you want to be nameless, you can<br>put a space in the box.</h1>

        <div class="modal-button-container">
           <button onclick="closeOptionModal()">OK</button></div>
           </div>`
        document.getElementById('option-modal').style.display = "flex"
    }
}

function logType() {
    const optionsList = document.getElementsByName("option");
    let goAhead = 0
    optionsList.forEach((option) => {
        if (option.checked){
            goAhead++
        }
    })

    if (goAhead) {
        displayTypes.forEach((type) => {
            if (type.items[type.items.length - 1].includes("dollar")){
                type.items.pop()
                }
            if (type.items[0].includes('sports')){
                type.items.shift()
            }
            })

        const options = Array.from(optionsList)
        options.forEach((option) => {
            const index = (options.indexOf(option))
            if (option.checked) {
                console.log(displayTypes[index].name)
                characterDetails.type = displayTypes[index].name.toLowerCase()
                characterDetails.verbs = displayTypes[index].verbs
                characterDetails.items = displayTypes[index].items
                characterDetails.money = displayTypes[index].money
            }
        })
        sportCheck()
    } else {
        document.getElementById('option-modal').innerHTML = `
        <div class="modal-content-container">
        <h1>Nothing is picked! <br><br> Please pick something.</h1>

        <div class="modal-button-container">
        <button onclick="closeOptionModal()">OK</button></div>
        </div>`
        
        document.getElementById('option-modal').style.display = "flex"
    }

}

function sportCheck() {
    if (characterDetails.type === 'sporty'){
        showSports()
    } else {
        showJobs()
    }
}

function logJob() {
    const optionsList = document.getElementsByName("option");
    let goAhead = 0
    optionsList.forEach((option) => {
        if (option.checked){
            goAhead++
        }
    })

    if (goAhead) {

        displayJobs.forEach((job) => {
            if (job.items[job.items.length - 1].includes("dollars")){
                job.items.pop()
                }
            }
        )

        const options = Array.from(optionsList)
        options.forEach((option) => {
            const index = (options.indexOf(option))
            if (option.checked) {
                characterDetails.job = displayJobs[index].name.toLowerCase()
                characterDetails.jobText = displayJobs[index].shorthand
                characterDetails.items = characterDetails.items.concat(displayJobs[index].items)
                if (displayJobs[index].money) {
                characterDetails.money = displayJobs[index].money + characterDetails.money
                }
            }
        })
        if (characterDetails.job === 'assistant') {
            for (let verb in characterDetails.verbs) {
                if (characterDetails.verbs[verb] > 0){
                    characterDetails.verbs[verb]--
                }
            }
        }
        showReasons()
    } else {
        document.getElementById('option-modal').innerHTML = `
        <div class="modal-content-container">
        <h1>Nothing is picked! <br><br> Please pick something.</h1>

        <div class="modal-button-container">
        <button onclick="closeOptionModal()">OK</button>`
        document.getElementById('option-modal').style.display = "flex"
    }

}

function logReason() {
    const optionsList = document.getElementsByName("option");
    let goAhead = 0
    optionsList.forEach((option) => {
        if (option.checked){
            goAhead++
        }
    })

    if (goAhead) {
        const options = Array.from(optionsList)
        options.forEach((option) => {
            const index = (options.indexOf(option))
            if (option.checked) {
                characterDetails.reason = displayReasons[index].name.toLowerCase()
                characterDetails.reasonText = displayReasons[index].shorthand
            }
        })
        showDetails()
    } else {
            document.getElementById('option-modal').innerHTML = `
            <div class="modal-content-container">
            <h1>Nothing is picked! <br><br> Please pick something.</h1>
    
            <div class="modal-button-container">
            <button onclick="closeOptionModal()">OK</button>`
            document.getElementById('option-modal').style.display = "flex"
        }
    
}

function logSport() {
    const optionsList = document.getElementsByName("option");
    let goAhead = 0
    optionsList.forEach((option) => {
        if (option.checked){
            goAhead++
        }
    })

    if (goAhead) {
    const sportsList = document.getElementsByName("option");
    const sports = Array.from(sportsList)
    sports.forEach((sport) => {
        const index = (sports.indexOf(sport))
        if (sport.checked) {
            characterDetails.items = characterDetails.items.concat(displaySports[index].items)
            if (displaySports[index].money) {
            characterDetails.money = displaySports[index].money + characterDetails.money
            }
        }
    })
    showJobs()
} else {
        document.getElementById('option-modal').innerHTML = `
        <div class="modal-content-container">
        <h1>Nothing is picked! <br><br> Please pick something.</h1>

        <div class="modal-button-container">
        <button onclick="closeOptionModal()">OK</button>`
        document.getElementById('option-modal').style.display = "flex"
    }
}

function moneyGoesUp() {
    const input = document.getElementsByName("change-money")
    const increment = input[0].value * 100
    console.log(increment)
    if (!increment || !isFinite(increment)) {
        return
    } else {
        const newMoney = increment + characterDetails.money
        console.log(newMoney)
        characterDetails.money = characterDetails.money + increment
        console.log(characterDetails.money)
    }
    document.getElementById("money-box").innerHTML = `
    <div class="money"><p>$` + (characterDetails.money / 100).toFixed(2) + `</p>
    <div><input type="number" id="change-money" name="change-money">
    <span><button onclick="moneyGoesUp()">+</button> <button onclick="moneyGoesDown()">-</button></span>
    </div>
    </div>`
}

function moneyGoesDown() {
    const input = document.getElementsByName("change-money")
    const increment = input[0].value * 100
    const newTotal = characterDetails.money - increment
    if (!isFinite(increment) || newTotal < 0) {
        document.getElementById('money-box').style.border = "2px solid red;"
        setTimeout(document.getElementById('money-box').style.border = "", 200)
    } else {
        characterDetails.money = characterDetails.money - increment
    }
    document.getElementById("money-box").innerHTML = `
    <div class="money"><p>$` + (characterDetails.money / 100).toFixed(2) + `</p>
    <div><input type="number" id="change-money" name="change-money">
    <span><button onclick="moneyGoesUp()">+</button><button onclick="moneyGoesDown()">-</button></span>
    </div>
    </div>`
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}


//called when the next button is called
function nextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            showJobs(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.color = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)

function unCheckVerbs() {
    const verbs = document.getElementsByName("verb")
    for (let i = 0; i < verbs.length; i++){
        verbs[i].checked = false
    }
}

function showInventory() {

    const string = characterDetails.items.toString()
    const items = string.replace(/,/g, '<br>')

    document.getElementById('inventory-items').innerHTML = items
    document.getElementById('inventory-modal').style.display = "flex"
    
    $(document).ready(function(){
        $('inventory-modal').draggable();   
    });
}

function closeInventory() {
    document.getElementById('inventory-modal').style.display = "none"
}

function showMap() {
  document.getElementById('map-modal').style.display = "flex"
}

function closeMap() {
  document.getElementById('map-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
