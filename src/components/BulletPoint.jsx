/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function BulletPoint({ editMode, removeMe }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  if (editMode) {
    return (
      <li>
        <input type="text" value={text} onChange={handleChange}></input>
        <button onClick={removeMe}>(-)</button>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}
