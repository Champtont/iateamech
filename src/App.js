import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MainPage from "./components/views/MainPage";
import AboutUs from "./components/views/AboutUs";
import ContactUs from "./components/views/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
