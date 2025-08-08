import { useState } from 'react';

export default function Filter({ name, current, setCurrent }) {
  function handleClick(){
    setCurrent(name);
  }
  
  return (
    <button
      className={`filter ${current == name ? 'selected' : ''}`}
      id={`filter${name}`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}