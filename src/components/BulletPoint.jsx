/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function BulletPoint({ editMode, removeMe }) {
  const [text, setText] = useState('');
  const [bg, setBg] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  if (editMode) {
    return (
      <li
        className="bulletPoint text"
        style={{ position: 'relative', backgroundColor: bg }}
      >
        <div
          style={{
            backgroundColor: 'red',
            width: '20px',
            height: '100%',
            position: 'absolute',
            top: '0px',
            left: '0px',
          }}
          onMouseOver={() => setBg('red')}
          onMouseLeave={() => setBg('')}
          onClick={removeMe}
        ></div>
        <textarea rows="2" onChange={handleChange} value={text}></textarea>
      </li>
    );
  } else {
    return <li className="bulletPoint text">{text}</li>;
  }
}
