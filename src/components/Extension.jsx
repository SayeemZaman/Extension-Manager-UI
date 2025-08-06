import RemoveBtn from "./RemoveBtn";
import Switch from "./Switch";
import { useState } from "react";

export default function Extension({ name, desc, logo, isActive }) {
  const [isActive, setIsActive] = useState(isActive);

  return (
    <div className={`extension ${isActive ? "activeExt" : "disabledExt"}`}>
      <img className="logo" src={logo} alt="Extension Logo" />
      <p>{name}</p>
      <p>{desc}</p>
      <div>
        <RemoveBtn />
        <Switch isActive={isActive} />
      </div>
    </div>
  );
}
