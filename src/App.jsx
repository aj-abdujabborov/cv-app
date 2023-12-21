import { useState } from 'react';
import { initialData } from './components/Data';
import Section from './components/Section';
import SectionName from './components/SectionName';
import ContactSegment from './components/ContactSegment';

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [contactData, setContactData] = useState(initialData.contact);
  const [educationData, setEducationData] = useState(initialData.educationSet);
  const [experienceData, setExperienceData] = useState(
    initialData.experienceSet,
  );

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
          editMe={setContactData}
          contactSegm={contactData}
        ></ContactSegment>

        <Section
          editMode={isEditMode}
          setItemArray={setEducationData}
          itemArray={educationData}
          title="Education"
        ></Section>

        <Section
          editMode={isEditMode}
          setItemArray={setExperienceData}
          itemArray={experienceData}
          title="Work Experience"
        ></Section>
      </div>
    </>
  );
}

export default App;
