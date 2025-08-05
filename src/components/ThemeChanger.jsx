import light from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

export default function ThemeChanger() {
  return (
    <button id="themeChanger">
      <img src={light} />
    </button>
  );
}
