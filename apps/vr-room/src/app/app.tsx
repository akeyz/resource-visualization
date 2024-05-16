// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import styles from './app.module.less';

import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);
  return (
    <div>
      <NxWelcome title="vr-room" />
    </div>
  );
}

export default App;
