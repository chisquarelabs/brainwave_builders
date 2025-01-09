import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Survey from './pages/Survey';
import Login from './pages/Login';
import ContactUs from './component/ContactUs';
import Signup from './pages/SignUp';
import CompletedPage from './component/CompletedPage';
import ChatBotComponent from './component/ChatBot';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Survey />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
      <Footer />
      <ChatBotComponent/>
    </Router>
  );
}

export default App;
