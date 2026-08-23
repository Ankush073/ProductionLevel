import { useState } from "react";
import { Header } from "../Header/header";
import { Body } from "../Body/body";
import { Footer } from "../Footer/footer";

export function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`
          min-h-screen
          transition-colors
          duration-300
          ${darkMode ? "bg-[#0B121A] text-white" : "bg-[#FBF8F1] text-slate-900"}
        `}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}