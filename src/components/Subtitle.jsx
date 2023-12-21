/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function Subtitle({ editMode, text, editMe }) {
  if (editMode) {
    return (
      <input
        className="h4"
        type="text"
        placeholder="Subtitle"
        value={text}
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <h4>{text}</h4>;
  }
}
