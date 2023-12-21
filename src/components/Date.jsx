/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function Date({ editMode, text, editMe }) {
  if (editMode) {
    return (
      <input
        style={{ width: text.length + 'ch' }}
        className="date text"
        type="text"
        value={text}
        placeholder="Date"
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <span className="date text">{text}</span>;
  }
}
