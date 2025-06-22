import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Booking from "./pages/Booking.jsx";
import MatatuMadness from "./pages/MatatuMadness.jsx";
import Footer from "./components/footer.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/stunts" element={<MatatuMadness />} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      <Footer />
     </div> 
    
  );
}

export default App;