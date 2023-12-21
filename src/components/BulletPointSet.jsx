/* eslint-disable react/prop-types */
import BulletPoint from './BulletPoint';
import { getBlankBulletPoint } from './Data';

export default function BulletPointSet({ editMode, bpArray, editMe }) {
  function addBulletPoint() {
    editMe([...bpArray, getBlankBulletPoint()]);
  }

  function editBulletPoint(bulletPoint) {
    editMe(bpArray.map(bp => (bp.key === bulletPoint.key ? bulletPoint : bp)));
  }

  function removeBulletPoint(key) {
    editMe(bpArray.filter(bp => bp.key !== key));
  }

  return (
    <div className="bulletPointSet">
      <ul>
        {bpArray.map(bp => (
          <BulletPoint
            key={bp.key}
            editMode={editMode}
            bulletPoint={bp}
            editMe={editBulletPoint}
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
