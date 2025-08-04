import ExtensionList from "./ExtensionList";
import Filter from "./Filter";

export default function ExtContainer() {
  const filters = ["All", "Active", "Inactive"];
  return (
    <>
      <div>
        <p>Extension List</p>
        <div id="filterContainer">{filters.map((filter, index) => (<Filter key={index} name={filter} />))}</div>
      </div>
      <ExtensionList />
    </>
  );
}
