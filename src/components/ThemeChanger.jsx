import light from "../assets/images/icon-sun.svg";
import dark from "../assets/images/icon-moon.svg";
import { useContext } from "react";
import { Theme } from "../contexts/theme";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(Theme);

  return (
    <button id="themeChanger" onClick={() => setTheme(!theme)}>
      <img src={theme == "light" ? light : dark} alt="Theme Changer Button" />
    </button>
  );
}
