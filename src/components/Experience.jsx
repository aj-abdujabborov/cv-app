/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Subtitle from './Subtitle';
import Title from './Title';
import DateRange from './DateRange';
import BulletPointSet from './BulletPointSet';

export default function Experience({ editMode }) {
  return (
    <div>
      <div className="spaceBetween">
        <Title editMode={editMode}></Title>
        <DateRange editMode={editMode}></DateRange>
      </div>
      <Subtitle editMode={editMode}></Subtitle>
      <BulletPointSet editMode={editMode}></BulletPointSet>
    </div>
  );
}
