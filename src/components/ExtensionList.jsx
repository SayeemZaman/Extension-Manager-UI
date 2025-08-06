import Extension from "./Extension";
import { data } from "../data.js";
import { useState } from "react";

export default function ExtensionList() {
<<<<<<< HEAD
  const [extList, setExtList] = useState([{}]);

  function setExt(ext) {
    setExtList((prev) => [
=======
  const [extensionList, setExtensionList] = useState([{}]);

  function setExt(ext) {
    setExtensionList((prev) => [
>>>>>>> afb7e0a1a517767b5ad7276e607a24077ef83285
      ...prev,
      {
        logo: ext.logo,
        name: ext.name,
<<<<<<< HEAD
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
=======
        description: ext.description,
        isActive: ext.isActive,
      },
    ]);
  }

  return <div id="list">{data.map((ext, index) => {})}</div>;
>>>>>>> afb7e0a1a517767b5ad7276e607a24077ef83285
}
