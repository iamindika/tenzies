export function newDie() {
  const value = Math.floor(Math.random() * 6) + 1;

  return { value, isFrozen: false }
}

export function allNewDice() {
  const dice = [];

  for(let i = 0; i < 10; i++) {
    dice.push({
      id: i + 1,
      ...newDie()
    })
  }

  return dice;
}

export function isAllDiceHeld(dice) {
  return dice.every(die => die.isHeld); 
}

export function isAllDiceEqual(dice) {
  const firstValue = dice[0].value;
  return dice.every(die => die.value === firstValue);
}