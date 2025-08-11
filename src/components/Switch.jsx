import { useState } from "react";

export default function Switch({ isActive }) {
  const [isOn, setIsOn] = useState(isActive);

  function handleChange() {
    setIsOn(!isOn);
  }

  return (
    <label className={`switch ${!isOn ? "off" : ""}`}>
      <input type="checkbox" checked={isOn} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
}
