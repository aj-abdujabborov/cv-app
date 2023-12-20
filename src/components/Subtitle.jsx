/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getInputUpdater } from './helpers';

export default function Subtitle({ editMode }) {
  const [subtitle, setSubtitle] = useState('');

  if (editMode) {
    return (
      <input
        className="h4"
        type="text"
        value={subtitle}
        onChange={getInputUpdater(setSubtitle)}
      ></input>
    );
  } else {
    return <h4>{subtitle}</h4>;
  }
}
