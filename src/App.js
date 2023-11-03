import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import CustomDND from "./pages/customDND";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customdnd" element={<CustomDND />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
