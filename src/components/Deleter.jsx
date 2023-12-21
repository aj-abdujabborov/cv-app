/* eslint-disable react/prop-types */
export default function Deleter({ setBg, removeComponent, shift }) {
  const color = document.documentElement
    .computedStyleMap()
    .get('--deleter-color')[0];

  return (
    <div
      className="deleter"
      style={{
        left: shift,
      }}
      onMouseOver={() => setBg(color)}
      onMouseLeave={() => setBg('')}
      onClick={removeComponent}
    ></div>
  );
}
