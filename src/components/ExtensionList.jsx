import Extension from "./Extension";
import { data } from "../data.js";

export default function ExtensionList() {
  return (
    <div id="list">
      {data.map((ext, index) => {
        <Extension name={ext.name} logo={ext.logo} desc={ext.desc} />;
      })}
    </div>
  );
}
