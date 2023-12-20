/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Experience from './Experience';

export default function ExperienceSet({ editMode }) {
  const [experiences, setExperiences] = useState([]);

  function addExperience() {
    const newExp = { key: uuid() };
    setExperiences([...experiences, newExp]);
  }

  function removeExperience(key) {
    setExperiences(experiences.filter(exp => exp.key !== key));
  }

  return (
    <>
      {experiences.map(exp => (
        <Experience
          key={exp.key}
          editMode={editMode}
          removeMe={() => removeExperience(exp.key)}
        ></Experience>
      ))}
      {editMode && <button onClick={addExperience}>Add experience</button>}
    </>
  );
}
