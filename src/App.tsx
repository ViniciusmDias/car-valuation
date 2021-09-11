import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes/index';
import { Contexts } from './contexts';

function App() {
  return (
    <Router>
      <Contexts>
        <Routes />
      </Contexts>
    </Router>
  );
}

export default App;
