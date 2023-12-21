/* eslint-disable react/prop-types */
import Experience from './Experience';
import { getBlankExperience } from './Data';

export default function ExperienceSet({ editMode, expArray, setExpArray }) {
  function addExperience() {
    setExpArray([...expArray, getBlankExperience()]);
  }

  function editExperience(experience) {
    setExpArray(
      expArray.map(exp => (exp.key === experience.key ? experience : exp)),
    );
  }

  function removeExperience(key) {
    setExpArray(expArray.filter(exp => exp.key !== key));
  }

  return (
    <>
      {expArray.map(exp => (
        <Experience
          key={exp.key}
          editMode={editMode}
          experience={exp}
          removeMe={() => removeExperience(exp.key)}
          editMe={editExperience}
        ></Experience>
      ))}
      {editMode && <button onClick={addExperience}>Add experience</button>}
    </>
  );
}
