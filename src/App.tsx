import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/local/Navbar";
import HomePage from "./pages/Home";
import { DestinationPage } from "./pages/Destination";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* dynamic route */}
        <Route path="/destination/:id" element={<DestinationPage />} />
      </Routes>
    </div>
  );
}

export default App;
