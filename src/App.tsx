import { Routes, Route } from "react-router-dom";

// components
import Home from './pages/Home';
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:position" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
