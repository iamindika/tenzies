import { useState } from 'react';
import Dice from "./components/Dice";
import { 
  createMultipleDice, 
  isAllDiceEqual, 
  isAllDiceFrozen 
} from "./helpers/helpers";

function App() {
  const [ dice, setDice ] = useState(() => createMultipleDice(10));

  const toggleFreeze = (id) => {
    setDice(prevDice => prevDice.map(die => {
      return die.id !== id 
        ? die
        : { ...die, isFrozen: !die.isFrozen }
    }));
  };

  const rollDice = () => {
    const numDiceToRoll = dice.filter(die => !die.isFrozen).length;
    const newDiceRolls = createMultipleDice(numDiceToRoll);
    const newDice = dice.map(die => {
      return die.isFrozen 
        ? die
        : { ...newDiceRolls.shift(), id: die.id}
      });

    setDice(newDice);
  }

  const reset = () => {
    const newDice = createMultipleDice(10);

    setDice(newDice);
  }

  return (
    <main className="main">
      <h1 className="main-title">Tenzies</h1>
      <p className="main-text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <Dice dice={dice} handleClick={toggleFreeze} />

      {isAllDiceEqual(dice) && isAllDiceFrozen(dice)
        ? <button
            className="btn"
            onClick={reset}
          >Reset</button>
        : <button
            className="btn"
            onClick={rollDice}
            disabled={isAllDiceFrozen(dice)}
          >Roll</button>}
    </main>
  )
}

export default App;
