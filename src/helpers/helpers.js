function createDie() {
  const value = Math.floor(Math.random() * 10) + 1;

  return { value, isFrozen: false }
}

export function createMultipleDice(num) {
  const dice = [];

  for(let i = 0; i < num; i++) {
    dice.push({
      id: i + 1,
      ...createDie()
    })
  }

  return dice;
}

export function isAllDiceFrozen(dice) {
  return dice.filter(die => die.isFrozen).length === 10; 
}

export function isAllDiceEqual(dice) {
  return dice.every((die, i, diceArr) => die.value === diceArr[0].value);
}