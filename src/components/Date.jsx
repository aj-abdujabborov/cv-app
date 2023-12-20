/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getInputUpdater } from './helpers';

export default function Date({ editMode }) {
  const [date, setDate] = useState('20XX');

  if (editMode) {
    return (
      <input
        type="text"
        value={date}
        onChange={getInputUpdater(setDate)}
      ></input>
    );
  } else {
    return <span>{date}</span>;
  }
}
