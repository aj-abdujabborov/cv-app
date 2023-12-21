/* eslint-disable react/prop-types */
import { useState } from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import DateRange from './DateRange';
import BulletPointSet from './BulletPointSet';
import Deleter from './Deleter';

export default function Experience({ editMode, removeMe, editMe, experience }) {
  const [bg, setBg] = useState('');

  function getPropertyEditor(propName) {
    return function setProperty(prop) {
      editMe({
        ...experience,
        [propName]: prop,
      });
    };
  }

  return (
    <div className="experience relative" style={{ background: bg }}>
      {editMode && (
        <Deleter
          setBg={setBg}
          removeComponent={removeMe}
          shift="-15px"
        ></Deleter>
      )}

      <div className="spaceBetween">
        <Title
          editMode={editMode}
          text={experience.title}
          editMe={getPropertyEditor('title')}
        ></Title>
        <DateRange
          editMode={editMode}
          start={experience.startDate}
          end={experience.endDate}
          editStart={getPropertyEditor('startDate')}
          editEnd={getPropertyEditor('endDate')}
        ></DateRange>
      </div>

      <Subtitle
        editMode={editMode}
        text={experience.subtitle}
        editMe={getPropertyEditor('subtitle')}
      ></Subtitle>

      <BulletPointSet
        editMode={editMode}
        bpArray={experience.bulletPoints}
        editMe={getPropertyEditor('bulletPoints')}
      ></BulletPointSet>
    </div>
  );
}
