import { useState } from 'react';
import { initialData } from './components/Data';
import Section from './components/Section';
import SectionName from './components/SectionName';

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
        <button onClick={() => setIsEditMode(true)}>Edit mode</button>
        <button onClick={() => setIsEditMode(false)}>View mode</button>
      </div>
      <div className="builder">
        <SectionName editMode={false} text="Education"></SectionName>
        <Section
          editMode={isEditMode}
          setItemArray={setEducationData}
          itemArray={educationData}
        ></Section>

        <SectionName editMode={false} text="Work Experience"></SectionName>
        <Section
          editMode={isEditMode}
          setItemArray={setExperienceData}
          itemArray={experienceData}
        ></Section>
      </div>
    </>
  );
}

export default App;
