const Die = ({ value, isHeld, onToggleHold }) => (
  <li 
    className={`die ${isHeld && 'die--hold'}`}
    onClick={onToggleHold}
  >
    {value}
  </li>
);

export default Die;