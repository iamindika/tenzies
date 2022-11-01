const Die = ({ id, value, isFrozen, handleClick }) => (
  <li 
    className={`die ${isFrozen && 'freeze'}`}
    onClick={() => handleClick(id)}
  >
    {value}
  </li>
);

export default Die;