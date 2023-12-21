/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function ContactName({ editMode, text, editMe }) {
  if (editMode) {
    return (
      <input
        className="h1"
        type="text"
        placeholder="Full name"
        value={text}
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <h1 className="h1">{text}</h1>;
  }
}
