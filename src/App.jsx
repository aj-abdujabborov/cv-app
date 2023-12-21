import { useState } from 'react';
import { initialData } from './components/Data';
import Section from './components/Section';
import ContactSegment from './components/ContactSegment';

let localData = localStorage.getItem('data');
if (localData) localData = JSON.parse(localData);

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState(localData || initialData);

  function getPropertyEditor(propName) {
    return function setProperty(prop) {
      const updatedData = {
        ...data,
        [propName]: prop,
      };
      setData(updatedData);
      localStorage.setItem('data', JSON.stringify(updatedData));
    };
  }

  return (
    <>
      <div className="controls">
        <button
          className={isEditMode ? 'active' : undefined}
          aria-label="Edit CV"
          onClick={() => setIsEditMode(true)}
        >
          <span className="material-symbols-outlined" aria-hidden={true}>
            edit
          </span>
        </button>
        <button
          className={!isEditMode ? 'active' : undefined}
          aria-label="View CV"
          onClick={() => setIsEditMode(false)}
        >
          <span className="material-symbols-outlined" aria-hidden={true}>
            note
          </span>
        </button>
      </div>
      <div className="builder">
        <ContactSegment
          editMode={isEditMode}
          editMe={getPropertyEditor('contact')}
          contactSegm={data.contact}
        ></ContactSegment>

        <Section
          editMode={isEditMode}
          setItemArray={getPropertyEditor('educationSet')}
          itemArray={data.educationSet}
          title="Education"
        ></Section>

        <Section
          editMode={isEditMode}
          setItemArray={getPropertyEditor('experienceSet')}
          itemArray={data.experienceSet}
          title="Work Experience"
        ></Section>
      </div>
    </>
  );
}

export default App;
