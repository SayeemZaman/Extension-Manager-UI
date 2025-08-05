import RemoveBtn from "./RemoveBtn";
import Switch from "./Switch";

export default function Extension({ name, desc, logo }) {
  function remove() {}

  return (
    <div className="extension">
      <img className="logo" src={logo} alt="Logo" />
      <p>{name}</p>
      <p>{desc}</p>
      <div>
        <RemoveBtn onClick={remove} />
        <Switch />
      </div>
    </div>
  );
}
