import * as React from 'react';

import SandTable from 'sand-table/Module';
import VrRoom from 'vr-room/Module';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sand-table">Sand Table</Link>
        </li>
        <li>
          <Link to="/vr-room">VR Room</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/sand-table" element={<SandTable />} />
        <Route path="/vr-room" element={<VrRoom />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
