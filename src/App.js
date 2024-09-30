import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'animate.css/animate.min.css';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    
    <div className='overflow-hidden bg-slate-10'>
    
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />         
            <Route path="/about" element={<About />} />         
            <Route path="/services" element={<Services />} />         
            <Route path="/contact" element={<Contact/>} />         
          </Routes>
          
        </Router>
        
    </div>
  );
}

export default App;
