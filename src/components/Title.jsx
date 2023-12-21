/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function Title({ editMode, text, editMe }) {
  if (editMode) {
    return (
      <input
        className="h3"
        type="text"
        value={text}
        placeholder="Title"
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <h3>{text}</h3>;
  }
}
