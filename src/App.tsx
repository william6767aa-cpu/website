import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Resources from './pages/Resources';
import News from './pages/News';
import Education from './pages/Education';
import Business from './pages/Business';
import Government from './pages/Government';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education />} />
        <Route path="/business" element={<Business />} />
        <Route path="/government" element={<Government />} />
      </Routes>
    </Router>
  );
}

export default App;
