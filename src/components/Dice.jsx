import Die from "./Die";

const Dice = ({ dice, handleClick }) => (
  <ul className="dice">
    {dice.map(die => (
      <Die 
        key={die.id}
        handleClick={handleClick}
        {...die}
      />
    ))}
  </ul>
);

export default Dice;