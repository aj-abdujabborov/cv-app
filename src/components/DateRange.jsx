/* eslint-disable react/prop-types */
import Date from './Date';

export default function DateRange({ editMode }) {
  return (
    <>
      <Date editMode={editMode}></Date> - <Date editMode={editMode}></Date>
    </>
  );
}
