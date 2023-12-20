/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import BulletPoint from './BulletPoint';

export default function BulletPointSet({ editMode }) {
  const [bulletPoints, setBulletPoints] = useState([]);

  function addBulletPoint() {
    const newBp = { key: uuid() };
    setBulletPoints([...bulletPoints, newBp]);
  }

  function removeBulletPoint(key) {
    setBulletPoints(bulletPoints.filter(bp => bp.key !== key));
  }

  return (
    <div className="bulletPointSet">
      <ul>
        {bulletPoints.map(bp => (
          <BulletPoint
            key={bp.key}
            editMode={editMode}
            removeMe={() => removeBulletPoint(bp.key)}
          ></BulletPoint>
        ))}
        {editMode && (
          <li>
            <button onClick={addBulletPoint}>Add bullet point</button>
          </li>
        )}
      </ul>
    </div>
  );
}
