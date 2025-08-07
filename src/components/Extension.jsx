import RemoveBtn from "./RemoveBtn";
import Switch from "./Switch";
import { useState } from "react";

export default function Extension({ id, name, desc, logo, isActive, remove }) {
  const [isOn, setIsOn] = useState(isActive);

  return (
    <div className={`extension ${isOn ? "activeExt" : "disabledExt"}`}>
      <img className="logo" src={logo} alt="Extension Logo" />
      <p>{name}</p>
      <p>{desc}</p>
      <div>
        <RemoveBtn />
        <Switch isActive={isActive} />
        <RemoveBtn onClick={() => remove(id)} />
        <Switch />
      </div>
    </div>
  );
}
