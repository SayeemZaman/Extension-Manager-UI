import Extension from "./Extension";
import { data } from "../data.js";
import { useState } from "react";

export default function ExtensionList() {
  const [extensionList, setExtensionList] = useState([{}]);

  return <div id="list">{data.map((ext, index) => {})}</div>;
}
