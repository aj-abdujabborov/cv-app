/* eslint-disable react/prop-types */
import { useState } from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import DateRange from './DateRange';
import BulletPointSet from './BulletPointSet';
import Deleter from './Deleter';

export default function SectionItem({
  editMode,
  removeMe,
  editMe,
  sectionItem,
}) {
  const [userHoveringDeleter, setUserHoveringDeleter] = useState(false);

  function getPropertyEditor(propName) {
    return function setProperty(prop) {
      editMe({
        ...sectionItem,
        [propName]: prop,
      });
    };
  }

  let contentDivClasses = 'content';
  if (editMode) contentDivClasses += ' deletable';
  if (editMode && userHoveringDeleter) contentDivClasses += ' active';

  return (
    <li className="relative sectionItem">
      {editMode && (
        <Deleter
          setUserHoveringDeleter={setUserHoveringDeleter}
          removeComponent={removeMe}
          shift="-1rem"
        ></Deleter>
      )}

      <div className={contentDivClasses}>
        <div className="spaceBetween">
          <Title
            editMode={editMode}
            text={sectionItem.title}
            editMe={getPropertyEditor('title')}
          ></Title>
          <DateRange
            editMode={editMode}
            start={sectionItem.startDate}
            end={sectionItem.endDate}
            editStart={getPropertyEditor('startDate')}
            editEnd={getPropertyEditor('endDate')}
          ></DateRange>
        </div>
        <Subtitle
          editMode={editMode}
          text={sectionItem.subtitle}
          editMe={getPropertyEditor('subtitle')}
        ></Subtitle>
        <BulletPointSet
          editMode={editMode}
          bpArray={sectionItem.bulletPoints}
          editMe={getPropertyEditor('bulletPoints')}
        ></BulletPointSet>
      </div>
    </li>
  );
}
