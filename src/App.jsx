import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIChat from "./pages/AIChat";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/splash"
          element={<Splash />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/chat"
          element={<AIChat />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;