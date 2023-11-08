import { Routes, Route } from "react-router-dom";
import English from "./Languages/English";
import French from "./Languages/French";
import LandingPage from "./Landing Page/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/English" element={<English/>}/>
        <Route path="/French" element={<French/>}/>
      </Routes>
    </div>
  );
}

export default App;