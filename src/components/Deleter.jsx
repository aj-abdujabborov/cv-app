/* eslint-disable react/prop-types */
export default function Deleter({
  setUserHoveringDeleter,
  removeComponent,
  shift,
}) {
  return (
    <div
      className="deleter"
      style={{
        left: shift,
      }}
      onMouseOver={() => setUserHoveringDeleter(true)}
      onMouseLeave={() => setUserHoveringDeleter(false)}
      onClick={removeComponent}
    ></div>
  );
}
