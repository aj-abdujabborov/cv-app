/* eslint-disable react/prop-types */
import { getInputUpdater } from './helpers';

export default function ContactDetail({
  editMode,
  text,
  editMe,
  placeholder,
  classes,
}) {
  const classNames = 'contactDetail text ' + classes;
  if (editMode) {
    return (
      <input
        className={classNames}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={getInputUpdater(editMe)}
      ></input>
    );
  } else {
    return <span className={classNames}>{text}</span>;
  }
}
