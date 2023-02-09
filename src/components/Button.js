import './Button.css';
import { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';

function Button(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="ButtonContainer">
      <button className="Button" onClick={() => setShow(!show)}>CLICK</button>
      {show && props.tipo === 'pregunta1' && <Question1 />}
      {show && props.tipo === 'pregunta2' && <Question2 />}
    </div>
  );
}

export default Button;
