import RemoveBtn from "./RemoveBtn";
import Switch from "./Switch";
import { useState } from "react";

export default function Extension({ name, desc, logo, isActive }) {
  const [isOn, setIsOn] = useState(isActive);

<<<<<<< HEAD
=======
export default function Extension({ name, desc, logo }) {
  function remove() {}

>>>>>>> afb7e0a1a517767b5ad7276e607a24077ef83285
  return (
    <div className={`extension ${isOn ? "activeExt" : "disabledExt"}`}>
      <img className="logo" src={logo} alt="Extension Logo" />
      <p>{name}</p>
      <p>{desc}</p>
      <div>
<<<<<<< HEAD
        <RemoveBtn />
        <Switch isActive={isActive} />
=======
        <RemoveBtn onClick={remove} />
        <Switch />
>>>>>>> afb7e0a1a517767b5ad7276e607a24077ef83285
      </div>
    </div>
  );
}
