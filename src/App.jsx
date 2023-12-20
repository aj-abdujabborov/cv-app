import { useState } from 'react';

import BulletPointSet from './components/BulletPointSet';
import ExperienceSet from './components/ExperienceSet';

function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <div className="controls">
        <button onClick={() => setIsEditMode(true)}>Edit mode</button>
        <button onClick={() => setIsEditMode(false)}>View mode</button>
      </div>
      <div className="builder">
        <ExperienceSet editMode={isEditMode}></ExperienceSet>
      </div>
    </>
  );
}

export default App;
