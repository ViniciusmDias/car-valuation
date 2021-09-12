import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/index';
import { Contexts } from './contexts';

function App() {
  return (
    <BrowserRouter basename="/">
      <Contexts>
        <Routes />
      </Contexts>
    </BrowserRouter>
  );
}

export default App;
