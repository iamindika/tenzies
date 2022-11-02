import { useState, useEffect } from 'react';
import Dice from "./components/Dice";
import Confetti from "react-confetti";
import {
  newDie,
  allNewDice, 
  isAllDiceEqual, 
  isAllDiceHeld
} from "./helpers";

function App() {
  const [ dice, setDice ] = useState(() => allNewDice());
  const [ tenzies, setTenzies] = useState(false);

  useEffect(() => {
    if(isAllDiceHeld(dice) && isAllDiceEqual(dice)) {
      setTenzies(true);
    }
  }, [dice])

  const toggleHold= (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id !== id 
        ? die
        : { ...die, isHeld: !die.isHeld }
    }));
  };

  const rollDice = () => {
    if(tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld
          ? die
          : { id: die.id, ...newDie() }
      }))
    }
  }

  return (
    <main className="main">
      {tenzies && <Confetti />}
      <h1 className="main-title">Tenzies</h1>
      <p className="main-text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <Dice dice={dice} onToggleHold={toggleHold} />

      <button
        className="btn"
        onClick={rollDice}
        disabled={isAllDiceHeld(dice) && !isAllDiceEqual(dice)}
      >{tenzies ? "Reset" : "Roll"}</button>
    </main>
  )
}

export default App;
