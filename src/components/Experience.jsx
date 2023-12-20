/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Subtitle from './Subtitle';
import Title from './Title';
import DateRange from './DateRange';
import BulletPointSet from './BulletPointSet';

export default function Experience({ editMode }) {
  return (
    <>
      <Title editMode={editMode}></Title>
      <Subtitle editMode={editMode}></Subtitle>
      <DateRange editMode={editMode}></DateRange>
      <BulletPointSet editMode={editMode}></BulletPointSet>
    </>
  );
}
