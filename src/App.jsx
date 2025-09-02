import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Project/Navbar';
import Footer from './Project/Footer';

import Home from './Project/Home';
import Services from './Project/Services/Services';
import About from './Project/About/About';
import Contact from './Project/Contact/Contact';
import LoginForm from './Project/LoginForm';
import Card1 from './Project/BookNow/Card1';
import ClothSelection from './Project/BookNow/ClothSection';
import SteamGarments from './Project/BookNow/SteamGarments';
import Fragrance from './Project/BookNow/Fragrance';
import Package from './Project/BookNow/Package';
import Personalized from './Project/BookNow/Personalized';
import OurServices from './Project/Services/OurServices';
import Fabric from './Project/About/Fabric';
import ContacUs from './Project/Contact/ContactUs';
import Works from './Project/Works';
import Journey from './Project/About/Journey';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
             <Route path="/services" element={<Services />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/our" element={<OurServices />} />
             <Route path="/fabric" element={<Fabric />} />
             <Route path="/us" element={<ContacUs />} />
             <Route path="/work" element={<Works />} />
             <Route path="/journey" element={<Journey />} />
             

        <Route path="/login" element={<LoginForm />} />
        <Route path="/card" element={<Card1 />} />
        <Route path="/cloth" element={<ClothSelection />} />
        <Route path="/steam" element={<SteamGarments />} />
        <Route path="/frag" element={<Fragrance />} />
        <Route path="/pak" element={<Package />} />
        <Route path="/person" element={<Personalized />} />
      



      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;