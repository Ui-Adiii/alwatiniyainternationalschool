import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Feature from "../pages/Feature";
import GalleryVideo from "../pages/GalleryVideos";
const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default AppRoute;