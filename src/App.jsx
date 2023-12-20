import { useState } from 'react';
import './App.css';

import BulletPointSet from './components/BulletPointSet';
import ExperienceSet from './components/ExperienceSet';

function App() {
  const [isEditMode, setIsEditMode] = useState(0);

  return (
    <>
      <div className="controls">
        <button onClick={() => setIsEditMode(true)}>Edit mode</button>
        <button onClick={() => setIsEditMode(false)}>View mode</button>
      </div>
      <div>
        <ExperienceSet editMode={isEditMode}></ExperienceSet>
      </div>
    </>
  );
}

export default App;
