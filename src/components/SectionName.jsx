/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function SectionName({ editMode, text, editMe }) {
  if (editMode) {
    return (
      <input
        className="h2"
        type="text"
        placeholder="Section"
        value={text}
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <h2 className="h2">{text}</h2>;
  }
}
