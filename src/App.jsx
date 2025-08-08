import "./components/Header.jsx";
import "./components/ExtContainer.jsx";
import { Theme } from "./contexts/theme.jsx";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} "App"`}>
      <Theme.Provider value={{ theme, setTheme }}>
        <Header />
        <ExtContainer />
      </Theme.Provider>
    </div>
  );
}
