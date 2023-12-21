/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function ContactDetail({ editMode, text, editMe, placeholder }) {
  if (editMode) {
    return (
      <input
        className="contactDetail"
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <span className="contactDetail">{text}</span>;
  }
}
