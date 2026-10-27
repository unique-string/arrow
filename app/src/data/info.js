
const info = {
  personality: {
    intro: <div className="info-graf">In the course of your adventure, you'll often interact with the gameworld by rolling a pair of six-sided dice. The success of most rolls will depend on your aptitude in one of the following areas:</div>,
    body: <div className="info-graf">
      <div><strong>Investigate.</strong> The ability to find meaningful information when searching for it.</div>
      <div><strong>Notice.</strong> The ability to detect the movements and details of one's surroundings.</div>
      <div><strong>Analyze.</strong> The ability to look into an object or situation and better understand it.</div>
      <div><strong>Muscle.</strong> The ability to effectively apply physical strength.</div>
      <div><strong>Endure.</strong> The ability to withstand hardships of the body and mind.</div>
      <div><strong>Creep.</strong> The ability to move and act under cover of secrecy.</div>
      <div><strong>React.</strong> The ability to respond to sudden changes in circumstances.</div>
      <div><strong>Persuade.</strong> The ability to convince others to believe things you believe.</div>
      <div><strong>Intimidate.</strong> The ability to cause fear and assert dominance in social situations.</div>
      <div><strong>Lie.</strong> The ability to present false fronts and bend the truth.</div>
    </div>,
    outro: <div className="info-graf">The personality type you'll choose in the next step will come with a set range of aptitudes, as well as a few inventory items.</div>
  },
  profession: {
    intro: <div className="info-graf">In the tiny world of a few train cars, you never know what might come in handy.</div>,
    body: '',
    outro: <div className="info-graf">Next you'll choose a profession, which will provide you with a specialized set of items and a situational boost to one of your aptitudes.</div>
  },
  motivation: {
    intro: <div className="info-graf">Never in the history of all humankind has anyone stuck their nose into the circumstances of a suspicious death without a reason.</div>,
    body: '',
    outro: <div className="info-graf">You'll choose your character's motivation on the next page, which will provide some advantage to a range of aptitude rolls in certain situations.</div>
  },
  violence: {
    intro: <div className="info-graf">It's no secret that situations can escalate when the stakes are high. If violence occurs, the target rolls React + Endure against the attacker's Muscle if they see the attack coming, or Endure against the attacker's Muscle + Creep if they don't. If you find yourself in a situation of violence, arming yourself can increase your chances of success. Weapons come in six categories:</div>,
    body1: 
    <div className="info-graf">
      <div><strong>Unaware target.</strong> The attacker rolls <strong>Muscle + Creep</strong> against the target's <strong>Endure</strong></div>
      <div><strong>Aware target.</strong> The attacker rolls <strong>Muscle</strong> against the target's <strong>Endure + React</strong></div>
    </div>,
    body2: 
    <div className="info-graf">
      <div><strong>1. Simple.</strong> A small or improvised object (blackjack, walking stick, hardcover book, dinner plate, etc.). Gives +1 to Muscle.</div>
      <div><strong>2. Little Trigger.</strong> A method to launch a small, hard projectile (slingshot, blowgun, .22 pistol, real hard throw of a compact Simple weapon, etc.). Gives +1 to Creep and allows attackers to add React to Muscle when rolling to attack.</div>
    	<div><strong>3. Jabbing.</strong> A small or improvised blade (penknife, fencing sword, large shard of glass, sharpened toothbrush, etc.). Gives +1 to Muscle and +1 to Creep.</div>
    	<div><strong>4. Heavy.</strong> A bulky or martial object used for bludgeoning (brass knuckles, lead pipe, small statue, candelabra, etc.). Gives +2 to Muscle.</div>
    	<div><strong>5. Penetrating.</strong> A serious edged or piercing weapon (hunting knife, chef's knife, sword, javelin, etc.). Gives +2 to Muscle and +2 to Creep.</div>
      <div><strong>6. Big Trigger.</strong> A boom stick (heavy pistol, hunting rifle, shotgun, etc.). Gives +2 to Muscle and allows attackers to add React to Muscle when rolling to attack.</div>
    </div>,
    outro: <div className="info-graf">Conventional weapons are rare on most transcontinental trains, but you may be able to turn pieces of the environment to your advantage. It\'s a good idea to look around for anything you might use to defend yourself if things get heated.</div>
  }
}

export default info