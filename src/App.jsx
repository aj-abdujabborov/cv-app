import { useState } from 'react';
import './App.css';

import BulletPointSet from './components/BulletPointSet';

function App() {
  const [isEditMode, setIsEditMode] = useState(0);

  return (
    <>
      <div className="controls">
        <button onClick={() => setIsEditMode(true)}>Edit mode</button>
        <button onClick={() => setIsEditMode(false)}>View mode</button>
      </div>
      <div>
        <BulletPointSet editMode={isEditMode}></BulletPointSet>
      </div>
    </>
  );
}

export default App;
