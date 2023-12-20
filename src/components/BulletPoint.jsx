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
      <li className="bulletPoint text" style={{ position: 'relative' }}>
        <div
          style={{
            backgroundColor: 'red',
            width: '10px',
            height: '80%',
            position: 'absolute',
            top: '50%',
            left: '-60px',
            transform: 'translateY(-50%)',
          }}
          onMouseOver={() => setBg('red')}
          onMouseLeave={() => setBg('')}
          onClick={removeMe}
        ></div>
        <textarea
          style={{ backgroundColor: bg }}
          rows="2"
          onChange={handleChange}
          value={text}
          placeholder="Bullet point"
        ></textarea>
      </li>
    );
  } else {
    return <li className="bulletPoint text">{text}</li>;
  }
}
