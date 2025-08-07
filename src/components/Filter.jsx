import { useState } from 'react';

export default function Filter({ name, current }) {
  return (
    <button className="filter" id={`filter${name}`}>
      {name}
    </button>
  )
}