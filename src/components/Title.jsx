/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getInputUpdater } from './helpers';

export default function Title({ editMode }) {
  const [title, setTitle] = useState('');

  if (editMode) {
    return (
      <input
        className="h3"
        type="text"
        value={title}
        onChange={getInputUpdater(setTitle)}
      ></input>
    );
  } else {
    return <h3>{title}</h3>;
  }
}
