import Extension from "./Extension";
import { data } from "../data.js";
import { useState } from "react";

export default function ExtensionList() {
  const [extList, setExtList] = useState([{}]);

  function setExt(ext) {
    setExtList((prev) => [
      ...prev,
      {
        logo: ext.logo,
        name: ext.name,
        desc: ext.description,
        isActive: ext.isActive,
      },
    ]);

    return (
      <Extension
        name={ext.name}
        desc={ext.description}
        logo={ext.logo}
        isActive={ext.isActive}
      />
    );
  }

  return <div id="list">{data.map((ext, index) => setExt(ext))}</div>;
}
