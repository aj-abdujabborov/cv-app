/* eslint-disable react/prop-types */
import Date from './Date';

export default function DateRange({
  editMode,
  start,
  end,
  editStart,
  editEnd,
}) {
  return (
    <>
      <Date editMode={editMode} text={start} editMe={editStart}></Date>-
      <Date editMode={editMode} text={end} editMe={editEnd}></Date>
    </>
  );
}
