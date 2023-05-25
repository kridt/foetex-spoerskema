import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Morning from "./pages/Morning";
import Evening from "./pages/Evening";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/morning" element={<Morning />} />
        <Route path="/evening" element={<Evening />} />
        <Route
          path="/thankyou"
          element={
            <h1 style={{ textAlign: "center" }}>Tak for din besvarelse</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
