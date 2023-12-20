/* eslint-disable react/prop-types */
import { useState } from 'react';
import Deleter from './Deleter';

export default function BulletPoint({ editMode, removeMe }) {
  const [text, setText] = useState('');
  const [bg, setBg] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  if (editMode) {
    return (
      <li className="bulletPoint text relative">
        <Deleter
          setBg={setBg}
          removeComponent={removeMe}
          shift="-15px"
        ></Deleter>
        <textarea
          style={{ backgroundColor: bg }}
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
