import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Appointment from './component/Appointment';
import Footer from './component/Footer';
import Survey from './pages/Survey';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Survey />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
