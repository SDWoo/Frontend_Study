import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setState] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <div>rrrrrer</div>
      <ul>
        <li>etet</li>
      </ul>
    </div>
  )
};

export default App;
