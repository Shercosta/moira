import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/local/Navbar";
import HomePage from "./pages/Home";
import { DestinationPage } from "./pages/Destination";
import { Footer } from "./components/local/Footer";
import ServicesPage from "./pages/Services";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* dynamic route */}
        <Route path="/destination/:id" element={<DestinationPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
