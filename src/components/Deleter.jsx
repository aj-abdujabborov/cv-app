export default function Deleter({ setBg, removeComponent }) {
  const color = document.documentElement
    .computedStyleMap()
    .get('--deleter-color')[0];

  return (
    <div
      className="deleter"
      style={{
        left: '-4ch',
      }}
      onMouseOver={() => setBg(color)}
      onMouseLeave={() => setBg('')}
      onClick={removeComponent}
    ></div>
  );
}
