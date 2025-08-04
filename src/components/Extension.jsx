import RemoveBtn from "./RemoveBtn";
import Switch from "./Switch";

export default function Extension({ name, desc, logo }) {
  return (
    <div className="extension">
      <img className="logo" src={logo} alt="Logo" />
      <p>{name}</p>
      <p>{desc}</p>
      <div>
        <RemoveBtn />
        <Switch />
      </div>
    </div>
  );
}
