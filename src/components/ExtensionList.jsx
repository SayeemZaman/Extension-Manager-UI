import Extension from "./Extension";
import { data } from "../data.js";
import { useState } from "react";

export default function ExtensionList() {
  const [extensionList, setExtensionList] = useState([{}]);

  function setExt(ext) {
    setExtensionList((prev) => [
      ...prev,
      {
        logo: ext.logo,
        name: ext.name,
        description: ext.description,
        isActive: ext.isActive,
      },
    ]);
  }

  return <div id="list">{data.map((ext, index) => {})}</div>;
}
