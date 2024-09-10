import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Delete from './components/Delete';
import Support from './components/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/support" element={<Support />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
