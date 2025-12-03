import JeevanParichay from "./components/JeevanParichay";
import { Routes, Route } from "react-router-dom";
import NameInput from "./components/NameInput";
import PadPage from "./components/PadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JeevanParichay />} />
      <Route path="/card" element={<NameInput />} />
      <Route path="/pad" element={<PadPage />} />
    </Routes>
  )
}

export default App;

