/* eslint-disable react/prop-types */
import { useState } from 'react';
import Deleter from './Deleter';
import { getInputUpdater } from './helpers';

export default function BulletPoint({
  editMode,
  bulletPoint,
  editMe,
  removeMe,
}) {
  const [bg, setBg] = useState('');

  function editBulletPoint(text) {
    editMe({ ...bulletPoint, text });
  }

  if (editMode) {
    return (
      <li className="bulletPoint edit text relative">
        <Deleter
          setBg={setBg}
          removeComponent={removeMe}
          shift="-1rem"
        ></Deleter>
        <textarea
          className="deletable"
          style={{ backgroundColor: bg }}
          onChange={getInputUpdater(editBulletPoint)}
          value={bulletPoint.text}
          placeholder="Bullet point"
        ></textarea>
      </li>
    );
  } else {
    return <li className="bulletPoint view text">{bulletPoint.text}</li>;
  }
}
