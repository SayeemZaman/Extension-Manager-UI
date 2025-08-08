import "./styles/style.scss";
import Header from "./components/Header.jsx";
import ExtContainer from "./components/ExtContainer.jsx";
import { Theme } from "./contexts/theme.jsx";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <div className={`${theme} App`}>
        <Header />
        <ExtContainer />
      </div>
    </Theme.Provider>
  );
}
