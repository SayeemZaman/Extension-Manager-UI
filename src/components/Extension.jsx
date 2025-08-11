import Switch from "./Switch";
import { useState } from "react";

export default function Extension({ id, name, desc, logo, isActive, remove }) {
  const [isOn, setIsOn] = useState(isActive);

  return (
    <div className={`extension ${isOn ? "activeExt" : "disabledExt"}`}>
      <img className="logo" src={logo} alt="Extension Logo" />
      <div>
        <p>{name}</p>
        <p>{desc}</p>
      </div>
      <div className="control">
        <button className="remove" onClick={() => remove(id)}>
          Remove
        </button>
        <Switch isActive={isOn} />
      </div>
    </div>
  );
}
