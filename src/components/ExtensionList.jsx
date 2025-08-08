import Extension from "./Extension";
import { data } from "../data.js";
import { useState } from "react";

export default function ExtensionList() {
  const [extList, setExtList] = useState(data); // set initial state to data

  function remove(idToRemove) {
    setExtList((prev) => prev.filter((_, idx) => idx !== idToRemove));
  }

  return (
    <div id="list">
      {extList.map((ext, index) => (
        <Extension
          key={index}
          id={index}
          name={ext.name}
          desc={ext.description}
          logo={ext.logo}
          isActive={ext.isActive}
          remove={remove}
        />
      ))}
    </div>
  );
}
