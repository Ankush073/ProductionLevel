import ThemeToggle from "./component/ThemeSwitcher/theme.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./component/HomePage/home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;