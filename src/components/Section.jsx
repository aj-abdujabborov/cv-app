/* eslint-disable react/prop-types */
import SectionItem from './SectionItem';
import { getBlankSectionItem } from './Data';

export default function Section({ editMode, itemArray, setItemArray }) {
  function addItem() {
    setItemArray([...itemArray, getBlankSectionItem()]);
  }

  function editItem(item) {
    setItemArray(itemArray.map(it => (it.key === item.key ? item : it)));
  }

  function removeItem(key) {
    setItemArray(itemArray.filter(it => it.key !== key));
  }

  return (
    <>
      {itemArray.map(it => (
        <SectionItem
          key={it.key}
          editMode={editMode}
          sectionItem={it}
          removeMe={() => removeItem(it.key)}
          editMe={editItem}
        ></SectionItem>
      ))}
      {editMode && (
        <button aria-label="Add item" onClick={addItem}>
          <span aria-hidden={true} className="material-symbols-outlined">
            add
          </span>{' '}
          Item
        </button>
      )}
    </>
  );
}
