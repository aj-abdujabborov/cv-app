/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getInputUpdater } from './helpers';

export default function Date({ editMode }) {
  const [date, setDate] = useState('20XX');

  function handleChange(e) {
    getInputUpdater(setDate)(e);
    e.target.style.width = e.target.value.length + 'ch';
  }

  if (editMode) {
    return (
      <input
        style={{ width: 0 }}
        className="date text"
        type="text"
        value={date}
        onChange={handleChange}
      ></input>
    );
  } else {
    return <span className="date text">{date}</span>;
  }
}
