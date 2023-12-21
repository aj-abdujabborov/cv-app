/* eslint-disable react/prop-types */
import Date from './Date';

export default function DateRange({
  editMode,
  start,
  end,
  editStart,
  editEnd,
}) {
  const dash = editMode ? ' - ' : start.length > 0 && ' - ';

  return (
    <div className="dateRange">
      <Date editMode={editMode} text={start} editMe={editStart}></Date>
      {dash}
      <Date editMode={editMode} text={end} editMe={editEnd}></Date>
    </div>
  );
}
