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
          <button aria-label="Add bullet point" onClick={addBulletPoint}>
            <span aria-hidden={true} className="material-symbols-outlined">
              add
            </span>{' '}
            Point
          </button>
        )}
      </ul>
    </div>
  );
}
