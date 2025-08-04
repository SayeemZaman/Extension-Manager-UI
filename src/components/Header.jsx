import ThemeChanger from "./ThemeChanger";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Manager Logo" />
      <p className="title">Extensions</p>
      <ThemeChanger />
    </header>
  );
}
