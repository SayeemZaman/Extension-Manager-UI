import Extension from "./Extension";
import { data } from "../data.js";
import { useState } from "react";

export default function ExtensionList() {
  const [extList, setExtList] = useState([{}]);

  function setExt(ext, id) {
    setExtensionList((prev) => [
      ...prev,
      {
        id: id,
        logo: ext.logo,
        name: ext.name,
        desc: ext.description,
        isActive: ext.isActive,
      },
    ]);

    return (
      <Extension
        id={id}
        name={ext.name}
        desc={ext.description}
        logo={ext.logo}
        isActive={ext.isActive}
        remove={remove}
      />
    );
  }

  function remove(idToRemove) {
    setExtList((prev) => prev.filter((id) => id !== idToRemove));
  }

  return <div id="list">{data.map((ext, index) => setExt(ext, index))}</div>;
}
