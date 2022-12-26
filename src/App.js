// import logo from './logo.svg';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
   <Router>
    <div class="navigation">
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </div>

    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/Contact' element={<Contact/>} />

      <Route path='/About' element={<About/>} />
    </Routes>
   </Router>
  );
}

export default App;

