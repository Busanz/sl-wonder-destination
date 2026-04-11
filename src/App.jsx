import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Beach from './pages/Beach';
import Heritage from './pages/Heritage';
import Wildlife from './pages/Wildlife';
import About from './pages/About';
import Layout from './pages/Layout';
import Destination from './pages/Destination';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/beach" element={<Beach />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/wildlife" element={<Wildlife />} />
          <Route path="/about" element={<About />} />
          <Route path="/:type/:id" element={<Destination />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
