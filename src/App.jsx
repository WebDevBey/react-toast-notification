import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-300 flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/contacts" className="hover:underline">
          Contacts
        </Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
