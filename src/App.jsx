import JeevanParichay from "./components/JeevanParichay";
import { Routes, Route } from "react-router-dom";
import NameInput from "./components/NameInput";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JeevanParichay />} />
      <Route path="/card" element={<NameInput />} />
    </Routes>
  )
}

export default App;

