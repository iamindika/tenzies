import Die from "./Die";

const Dice = ({ dice, onToggleHold }) => (
  <ul className="dice">
    {dice.map(die => (
      <Die 
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        onToggleHold={() => onToggleHold(die.id)}
      />
    ))}
  </ul>
);

export default Dice;