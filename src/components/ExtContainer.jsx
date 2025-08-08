import ExtensionList from "./ExtensionList";
import Filter from "./Filter";
import { useState } from 'react';

export default function ExtContainer() {
  const [currentFilter, setCurrentFilter] = useState('All')
  const filters = ["All", "Active", "Inactive"];
  
  return (
    <>
      <div>
        <p>Extension List</p>
        <div id="filterContainer">{filters.map((filter, index) => (<Filter key={index} name={filter} current={currentFilter} setCurrent={setCurrentFilter} />))}</div>
      </div>
      <ExtensionList />
    </>
  );
}
