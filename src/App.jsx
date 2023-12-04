import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cricbuzz from './component/Cricbuzz.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Cricbuzz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
