import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import More from './pages/More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/more' element={<More />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
