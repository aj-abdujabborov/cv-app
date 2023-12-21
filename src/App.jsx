import { useState } from 'react';
import { initialData } from './components/Data';
import ExperienceSet from './components/ExperienceSet';

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
        <ExperienceSet
          editMode={isEditMode}
          setExpArray={setExperienceData}
          expArray={experienceData}
        ></ExperienceSet>
      </div>
    </>
  );
}

export default App;
