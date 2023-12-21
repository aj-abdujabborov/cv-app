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
  const [userHoveringDeleter, setUserHoveringDeleter] = useState(false);

  function editBulletPoint(text) {
    editMe({ ...bulletPoint, text });
  }

  let inputClassNames = '';
  if (editMode) inputClassNames += ' deletable';
  if (editMode && userHoveringDeleter) inputClassNames += ' active';

  if (editMode) {
    return (
      <li className="bulletPoint edit text relative">
        <Deleter
          setUserHoveringDeleter={setUserHoveringDeleter}
          removeComponent={removeMe}
          shift="-1rem"
        ></Deleter>
        <textarea
          className={inputClassNames}
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
