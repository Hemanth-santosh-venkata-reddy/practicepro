import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signinform from "./pages/signinform/Signinform";
import Signupform from "./pages/Signupform/Signupform";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const token = localStorage.getItem("myCat");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signupform />} />
        <Route path="/signupform" element={<Signupform />} />
        <Route path="/signinform" element={<Signinform />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
