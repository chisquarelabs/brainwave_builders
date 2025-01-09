import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Survey from './pages/Survey';
import Login from './pages/Login';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Survey />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
