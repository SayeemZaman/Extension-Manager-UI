import RemoveBtn from "./RemoveBtn";
import Switch from "./Switch";
import { useState } from "react";

export default function Extension({ name, desc, logo, isActive }) {
  const [isOn, setIsOn] = useState(isActive);

  function remove() {}

  return (
    <div className={`extension ${isOn ? "activeExt" : "disabledExt"}`}>
      <img className="logo" src={logo} alt="Extension Logo" />
      <p>{name}</p>
      <p>{desc}</p>
      <div>
        <RemoveBtn />
        <Switch isActive={isActive} />
        <RemoveBtn onClick={remove} />
        <Switch />
      </div>
    </div>
  );
}
